var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('game', {title: 'NonoGram.io'});
});

router.get('/maker', function(req, res, next) {
  res.render('maker', {title: 'NonoGram.io'});
});


module.exports = router;
