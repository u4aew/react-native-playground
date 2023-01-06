const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const {messages} = require('./data');
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.emit("loadingMessages", JSON.stringify(messages));

    socket.on("sendMessageClient", (text) => {

    socket.emit("getMessageServer", JSON.stringify( {
        id: getRandomInt(1000),
        text: `${text}`,
        user: {
            id: 1,
            name: 'User',
        },
        isAdmin: false,
        isRead: true
    }));


     setTimeout(() => {
         socket.emit("getMessageServer", JSON.stringify( {
             id: getRandomInt(1000),
             text: `${text} from Admin`,
             user: {
                 id: 1,
                 name: 'Employee 574',
             },
             isAdmin: true,
             isRead: true
         }));
     }, 3000);
    });
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

server.listen(3000, () => {
    console.log('listening on *:3000');
});
