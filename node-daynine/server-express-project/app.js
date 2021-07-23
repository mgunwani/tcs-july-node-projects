var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Allow CORS to All Routes
//app.use(cors());
// All CORS to Specific Routes
var corsOptions = {
    origin: 'http://localhost:4200'
};
app.use(cors(corsOptions));

// Connect to Database
mongoose.connect("mongodb://localhost:27017/tcsdb",
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('Connected to Database!!') })
    .catch((err) => { console.log(err) })

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
