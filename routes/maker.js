var express = require('express');
var router = express.Router();

var help = require('../models/renderHelper');

// GET
router.get('/', function(req, res, next) {
    if (req.signedCookies.id || req.signedCookies.tid) {
        help.render(req, res, 'maker', {stylesheet: 'style'});
    }
    else {
        res.redirect('/signup');
    }
});

module.exports = router;