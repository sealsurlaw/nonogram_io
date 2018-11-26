var passport = require('passport');
var LocalStrategy = require('passport-local');

var db = require('../db');

passport.use(new LocalStrategy(
    function(username, password, done) {
        
    }
))