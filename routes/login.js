var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var hash = require('password-hash');

var db = require('../db');
var help = require('../models/renderHelper');


// GET
router.get('/', function(req, res, next) {
  help.render(req, res, 'login');
});



// POST
router.post('/', function(req, res, next) {
  var form = new formidable.IncomingForm();

  form.parse(req, function(err, fields, files) {
    var email = fields.email;
    var password = fields.password;

    db.any(`SELECT * FROM public.users WHERE user_email='`+email+`'`)
    .then( user => {
      if (user[0] && hash.verify(password, user[0].user_password)) {
        res.cookie("id", user[0].user_id, {signed: true, maxAge: 1000*60*60*24*7})
        .redirect('/');
      }
      else {
        help.render(req, res, 'login', {message: "Incorrect Email or Password"} );
      }
    })
  })


});

module.exports = router;
