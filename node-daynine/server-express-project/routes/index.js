var express = require('express');
var router = express.Router();
var Customer = require('../models/customer.model');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/customers', (req, res) => {
  Customer.create(req.body, (err, result) => {
    if (err) throw err;
    res.send(result)
  })
})

module.exports = router;
