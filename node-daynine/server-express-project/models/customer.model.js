var mongoose = require('mongoose');

var customerSchema = mongoose.Schema({
    name: String,
    amount: String
});

module.exports = mongoose.model('Customer', customerSchema);