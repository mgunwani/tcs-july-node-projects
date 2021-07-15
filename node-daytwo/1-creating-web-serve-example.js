var http = require('http');


// Handle Multiple Incoming Request
var server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, { 'Content-Type': 'text/htlm' });
        res.write('<h2>Home Page</h2>');
        res.end();
    } else if (req.url == '/admin') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>Admin Portal</h2>');
        res.end();
    } else if (req.url == '/user') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>User Portal</h2>');
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write("<h2 style='color: red'>Invalid Request</h2>");
        res.end();
    }
})

server.listen(3000, () => {
    console.log('The server is running at port 3000!!')
});