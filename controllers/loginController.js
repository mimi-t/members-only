const passport = require('passport');

exports.login_get = function (req, res, next) {
    res.render('login', { title: 'Log In' });
}

exports.login_post = [
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    })
]