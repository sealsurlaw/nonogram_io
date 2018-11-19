var express = require('express');
var router = express.Router();
var db = require("../db");
var help = require('../models/renderHelper');

router.get('/', function(req, res, next) {
  help.render(req, res, 'game', {stylesheet: "style"});
});

router.get('/maker', function(req, res, next) {
  help.render(req, res, 'maker', {stylesheet: "style"});
});

router.get('/signuporlogin', function(req, res, next) {
  help.render(req, res, 'signuporlogin');
});

module.exports = router;
