const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);
const {messages} = require('./data');
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// utils
const getRandomMessage = ({text, isAdmin = false}) => {
    return JSON.stringify({
        id: getRandomInt(1000), text: `${text}`, user: isAdmin ? {
            id: 2, name: 'Admin',
        } : {
            id: 1, name: 'User',
        }, isAdmin, isRead: true, date: new Date().toISOString(),
    })
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

// ws
io.on('connection', (socket) => {
    socket.emit("loadingMessages", JSON.stringify(messages));

    socket.on("sendMessageClient", (text) => {
        socket.emit("getMessageServer", getRandomMessage({text, isAdmin: false}));
        setTimeout(() => {
            socket.emit("getMessageServer", getRandomMessage({text: `${text} from Admin`, isAdmin: true}));
        }, 3000);
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
