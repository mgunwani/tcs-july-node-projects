var express = require('express');
var router = express();
var request = require('request');

// Request Url: http://localhost:3000/users/
router.get('/', (req, res) => {
    request('https://jsonplaceholder.typicode.com/users', (err, response, body) => {
        if (err) throw err;
        let users = JSON.parse(body);
        let userList = ''
        users.forEach(user => {
            userList += `${user['name']}, ${user['email']}<br/>`;
        });
        res.send(userList);
    });
});

// Request Url: http://localhost:3000/users/
router.post('/', (req, res) => {
    res.send('Post Users');
});

// Request Url: http://localhost:3000/users/
router.put('/', (req, res) => {
    res.send('Put Users');
});

// Request Url: http://localhost:3000/users/
router.delete('/', (req, res) => {
    res.send('Delete Users');
});

module.exports = router;