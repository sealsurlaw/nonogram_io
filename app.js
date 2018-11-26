require("dotenv").config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var hbs = require('hbs');
var session = require('express-session');

var index = require('./routes/index');
var signup = require('./routes/signup');
var login = require('./routes/login');
var logout = require('./routes/logout');
var leveldetails = require('./routes/leveldetails');
var signuporlogin = require('./routes/signuporlogin');
var dashboard = require('./routes/dashboard');
var search = require('./routes/search');
var puzzle = require('./routes/puzzle');
var maker = require('./routes/maker');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'weflkejrg534DFGgae/!@$kwqr',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false}))

app.use('/', index);
app.use('/signup', signup);
app.use('/login', login);
app.use('/logout', logout);
app.use('/leveldetails', leveldetails);
app.use('/signuporlogin', signuporlogin);
app.use('/dashboard', dashboard);
app.use('/search', search);
app.use('/puzzle', puzzle);
app.use('/maker', maker);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
