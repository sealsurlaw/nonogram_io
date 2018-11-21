var express = require('express');
var router = express.Router();

var db = require('../db');
var help = require('../models/renderHelper');

// GET
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    db.any(`SELECT puzzle_level, puzzle_color FROM public.puzzles WHERE puzzle_id=`+id)
    .then( puzzle => {
        var puz = {};
        puz.puzzle_level = puzzle[0].puzzle_level;
        puz.puzzle_color = puzzle[0].puzzle_color;
        var script = `
            var level =`+puz.puzzle_level+`;
            var fLevel = `+puz.puzzle_color+`;` 
        help.render(req, res, 'game', {puzzle: script, stylesheet: 'style'});
    })
});

module.exports = router;