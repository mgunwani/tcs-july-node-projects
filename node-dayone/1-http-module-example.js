// 1. Import http Module
var http = require('http');

// 2. Create Web Server
var server = http.createServer((req, res) => {
    // Handling Incoming Request Here..
    res.write('Welcome All!!!');
    res.end();
})

// 3. Listen Request on Specific Port
server.listen(3000, () => {
    console.log('Server is running at port 3000!!');
})
