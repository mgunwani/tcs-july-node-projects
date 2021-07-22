var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

var users = [];
io.on('connection', (socket) => {
    socket.on('setUsername', function (data) {
        users.push(data);
        socket.emit('userSet', { username: data });
    })
    socket.on('msg', function (data) {
        // Broadcasting this message to everyone.
        io.sockets.emit('newmsg', data);
    })
})

http.listen(5000, () => {
    console.log('Server is running at port 5000!!');
})
