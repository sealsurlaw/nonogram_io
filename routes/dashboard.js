var express = require('express');
var router = express.Router();
var url = require('url');

var db = require('../db');
var help = require('../models/renderHelper');


// GET
router.get('/', function(req, res, next) {
  var user = req.session.user_id;
  var q = url.parse(req.url, true).query;
  var sort = q.sort;
  if (sort) {
    var order = ' ORDER BY puzzle_'+sort+' ASC';
  }
  else {
    var order = '';
  }

  db.any(`
    SELECT * FROM public.puzzles WHERE puzzle_published=true AND puzzle_user_id=`+user+order
  )
  .then( myPuzzles => {
    if (myPuzzles.length != 0) {
      help.render(req, res, 'dashboard', {puzzles: myPuzzles});
    }
    else {
      help.render(req, res, 'dashboard', {message: "You have no puzzles yet!"});
    }
  })
  .catch( err => {
    console.log("No puzzles found");
    help.render(req, res, 'dashboard', {message: "You have no puzzles yet"});
  });
});


module.exports = router;
