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
    socket.emit("loading", JSON.stringify(messages));

    socket.on("messageClient", (arg) => {
        setTimeout((() => {socket.emit("messageServer", `${arg} from server`)}, 5000));
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
