var express = require('express');
var router = express.Router();
var formidable = require('formidable');

var db = require('../db');
var help = require('../models/renderHelper');


// POST
router.post('/', function(req, res, next) {
  var form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    var img = fields.thumbnail;
    var level = fields.levelArray;
    var color = fields.colorArray;
    var size = fields.size;
    var user;
    if (req.signedCookies.id) {
      user = req.signedCookies.id;
    }
    else {
      user = req.signedCookied.tid;
    }

    db.any(`
      INSERT INTO public.puzzles(
        puzzle_thumbnail, puzzle_user_id, puzzle_level, puzzle_color, puzzle_size)
      VALUES ('`+img+`', `+user+`, '`+level+`', '`+color+`', `+size+`)
      RETURNING puzzle_id
    `)
    .then( id => {
      help.render(req, res, 'leveldetails', {img: img, id: id[0].puzzle_id});
    })
    .catch( err => {
      console.log(err);
      res.end();
    })

  })
});



module.exports = router;
