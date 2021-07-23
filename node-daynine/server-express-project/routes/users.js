var express = require('express');
var router = express.Router();

var userList = [
  { userId: 101, userName: 'King', userAge: 25 },
  { userId: 102, userName: 'Kochhar', userAge: 34 },
  { userId: 103, userName: 'Roger', userAge: 35 },
  { userId: 104, userName: 'Lee', userAge: 50 },
  { userId: 105, userName: 'Kyle', userAge: 22 }
]

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(userList);
});

module.exports = router;
