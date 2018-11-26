var hash = require('password-hash');

function validatePassword (email, password, callback) {
    db.any(`SELECT * FROM public.users WHERE user_email='`+email+`'`)
    .then( user => {
        if (user[0] && hash.verify(password, user[0].user_password)) {
            callback(err, user);
        }
        else {
            return null;
        }
    })
}

module.exports = validatePassword;