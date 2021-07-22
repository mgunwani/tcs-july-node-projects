
Socker Programming (socket.io):

	- Socket.io is a JavaScript library for real-time web applications.
	- It enables real-time biodirectional communication between clients and servers.
	- This library has two parts:
		- Client-Side Library
		- Server-Side Library
	- Both components have an identical APIs.	
	
Real Time Applications:

	- Instant Messanging
	- Push Notifications
	- Collaboration Applications
	- Online Gaming

/* Demonstration: Connect and Disconnect Sockets */	

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

// Whenever a client connects this gets executed
io.on('connection', (socket) => {
    console.log('A user is connected.');

    // Whenever a client disconnects this event gets executed.
    socket.on('disconnect', () => {
        console.log('A user is disconnected.');
    })

})


http.listen(5000, () => {
    console.log('Server is running at port 5000!!');
})

-----------------------------------------------------------

/* Demonstration: Event Handling */	

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

// Whenever a client connects this gets executed
io.on('connection', (socket) => {
    console.log('A user is connected.');

    // Handling Events for Users who are still connected.
    setTimeout(function () {
        socket.send('Hey, You are still connected.')
    }, 4000);

    // Whenever a client disconnects this event gets executed.
    socket.on('disconnect', () => {
        console.log('A user is disconnected.');
    })

})


http.listen(5000, () => {
    console.log('Server is running at port 5000!!');
})

---------------------------------------------------

/* Demonstration: Broadcasting */	
	
Broadcasting means sending a message to all connected clients.	
We can send message to all connected clients or we can target namesapces.


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

---------------------------------------------------

