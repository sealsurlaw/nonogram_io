var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var hash = require('password-hash');
var help = require('../models/renderHelper');

var db = require("../db");

router.get('/', function(req, res, next) {
  help.render(req, res, 'signup');
});

router.post('/', function(req, res, next) {
  var email;
  var password;
  var username;

  var form = new formidable.IncomingForm();

  form.parse(req, function(err, fields, files) {
    username = fields.username;
    email = fields.email;
    password = fields.password;
    password = hash.generate(password);

    db.any(`
      INSERT INTO public.users
        (user_name, user_email, user_password)
      VALUES ('`+username+`', '`+email+`', '`+password+`')`)
    .catch( err => {
      if (err.constraint == 'user_email_unique') {
        help.render(req, res, 'signup', {message: 'Email already exists'});
      }
      else if (err.constraint == 'user_name_unique') {
        help.render(req, res, 'signup', {message: 'Username already exists'});
      }
      return;
    });

    help.render(req, res, 'login');
  })


});

module.exports = router;
