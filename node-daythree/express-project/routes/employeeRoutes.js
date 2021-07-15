var express = require('express');
var router = express();

// Request Url: http://localhost:3000/employees/
router.get('/', (req, res) => {
    res.send('Get Employees');
});

// Request Url: http://localhost:3000/employees/
router.post('/', (req, res) => {
    res.send('Post Employees');
});

// Request Url: http://localhost:3000/employees/
router.put('/', (req, res) => {
    res.send('Put Employees');
});

// Request Url: http://localhost:3000/employees/
router.delete('/', (req, res) => {
    res.send('Delete Employees');
});

module.exports = router;