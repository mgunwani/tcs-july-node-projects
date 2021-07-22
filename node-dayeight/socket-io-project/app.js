

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

var clients = 0;
io.on('connection', (socket) => {
    clients++;
    // Broadcasting to all clients:
    io.sockets.emit('broadcast', clients + " clients are connected.");
    socket.on('disconnect', () => {
        clients--;
        // Broadcasting to all clients:
        io.sockets.emit('broadcast', clients + " clients are connected.");
    })

})


http.listen(5000, () => {
    console.log('Server is running at port 5000!!');
})