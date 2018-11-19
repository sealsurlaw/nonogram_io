var express = require('express');
var router = express.Router();


// GET
router.get('/', function(req, res, next) {
    res.clearCookie("id").redirect('/login');
});

module.exports = router;