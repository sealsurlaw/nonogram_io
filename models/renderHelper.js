var db = require('../db');

function render(req, res, page, options) {
    var userId = req.signedCookies.id;

    if (!options) {
        var options = {};
    }
    if (!options.stylesheet) {
        options.stylesheet = page;
    }
    options.title = "Nonogram.io";

    if (!userId) {
        res.render(page, options)
        return;
    }
    
    db.any(`SELECT * FROM public.users WHERE user_id=`+userId)
    .then( data => {
        if (data) {
            options.user = data[0];
        }
        res.render(page, options)
    })
    .catch( err => {
        console.log("Error?");
        console.log(err);
    })
    
}

module.exports.render = render;