var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', (req, res) => {
    res.send('hello from simple server :)')
})

app.get('/movies', (req, res) => {
    fs.readFile('db.json', (err, result) => {
        if (err) throw err;
        res.send(JSON.parse(result));
    });
});

app.listen(4000, () => {
    console.log('Server is running at port 3000!!');
})