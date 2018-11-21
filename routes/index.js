var express = require('express');
var router = express.Router();
var db = require("../db");
var help = require('../models/renderHelper');

router.get('/', function(req, res, next) {
  res.redirect('/search');
});

// router.get('/maker', function(req, res, next) {
//   help.render(req, res, 'maker', {stylesheet: "style"});
// });

router.get('/signuporlogin', function(req, res, next) {
  help.render(req, res, 'signuporlogin');
});

// router.get('/leveldetails', function(req, res, next) {
//   help.render(req, res, 'leveldetails');
// });

module.exports = router;
