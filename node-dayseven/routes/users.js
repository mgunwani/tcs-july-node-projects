var express = require('express');
var router = express.Router();
var User = require('../models/userModel')

var passport = require('passport');
// var LocalStrategy = require('passport-local');
// var passportLocalMongoose = require('passport-local-mongoose');
// var session = require('express-session');


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get("/login", (req, res) => {
  res.render('../views/users/login');
})

router.post('/login', passport.authenticate('local', {
  successRedirect: "/products",
  failureMessage: "/users/login"
}), (req, res) => {
  console.log('Trying to Login');
})

router.get('/register', (req, res) => {
  res.render('../views/users/register');
})

router.post('/register', (req, res) => {
  var user = new User({
    username: req.body.username,
    password: req.body.password,
    phone: req.body.phone,
    telephone: req.body.telephone
  });
  User.register(user, req.body.password, function (err, user) {
    console.log('Entered in Post Method');
    if (err) {
      console.log(err);
      res.render('../views/users/register')
    }
    passport.authenticate("local")(req, res, function () {
      res.render('../views/users/login')
    })
  })

})

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/users/login')
})

module.exports = router;
