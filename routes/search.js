var express = require('express');
var router = express.Router();
var url = require('url');

var db = require('../db');
var help = require('../models/renderHelper');


// GET
router.get('/', function(req, res, next) {
  // var user = req.session.id;
  var q = url.parse(req.url, true).query;
  var search = q.search;
  var sort = q.sort;

  var where = ' WHERE puzzle_published=true';
  var order = ' ORDER BY puzzle_created ASC';

  if (search) {
    where = ` WHERE puzzle_published=true AND (puzzle_title ILIKE '%` + search + `%' OR puzzle_description ILIKE '%` + search + `%')`;
  }
  if (sort) {
    order = ' ORDER BY puzzle_'+sort+' ASC';
  }

  db.any(`
    SELECT * FROM public.puzzles`+where+order
  )
  .then( results => {
    if (results.length != 0) {
      help.render(req, res, 'search', {puzzles: results, script: 'search', search: search});
    }
    else {
      help.render(req, res, 'search', {message: "There are no puzzles that match your search", script: 'search', search: search});
    }
  })
  .catch( err => {
    console.log(err);
    help.render(req, res, 'search', {message: "There are no puzzles", script: 'search'});
  });
});


module.exports = router;