var express = require('express');
var router = express.Router();
var formidable = require('formidable');

var db = require('../db');
var help = require('../models/renderHelper');

router.post('/', function(req, res, next) {
    var form = new formidable.IncomingForm();
    var user;
    if (req.signedCookies.id) {
        user = req.signedCookies.id;
    }
    else {
        user = req.signedCookies.tid;
    }
    form.parse(req, (err, fields, files) => {
        var title = fields.title;
        var description = fields.description;
        var id = fields.puzzle_id;

        db.any(`
            UPDATE public.puzzles
            SET puzzle_title='`+title+`', puzzle_description='`+description+`', puzzle_published=true
            WHERE puzzle_id=`+id+` RETURNING puzzle_id`
        )
        .then( id => {
            console.log(id);
            if (req.signedCookies.tid) {
                help.render(req, res, 'signuporlogin', {message: "Please login or signup to continue"});
                return;
            }
            else if (req.signedCookies.id){
                res.redirect('/');
            }
        })
        .catch ( err => {
            console.log(err);
            help.render(req, res, 'maker');
        });
    });
});

module.exports = router;