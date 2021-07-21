var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  if (req.isAuthenticated()) {
    res.render('index', { title: 'Admin Dashboard' });
  } else {
    res.render('../views/users/login');
  }
});

module.exports = router;
