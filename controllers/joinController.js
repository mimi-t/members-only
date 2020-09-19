const User = require('../models/user');

exports.user_join_get = function (req, res, next) {
    res.render('join', { title: 'Join the Club' });
}

exports.user_join_post = function (req, res, next) {
    if (req.body.passcode === process.env.CLUB_PASSCODE) {
        //upgrade member status, redirect to home page
        User.findByIdAndUpdate(res.locals.currentUser._id, { $set: { member: true }}, function(err) {
            if (err) return next(err);
            res.redirect('/');
        });
    } else {
        //render page again with message
        res.render('join', { title: 'Join the Club', msg: 'Wrong passcode, please try again' })
    }
}
