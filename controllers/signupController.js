const User = require('../models/user');
const { body, check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

exports.user_create_get = function (req, res, next) {
    res.render('signup', { title: 'Sign Up' });
}

exports.user_create_post = [
    //validate and sanitise input
    body('fname').trim().isLength({ min: 1 }).withMessage('First name required.').escape(),
    body('lname').trim().isLength({ min: 1 }).withMessage('Last name required.').escape(),

    check('password').exists(),
    check('confirm-password', 'Passwords must match!')
        .exists()
        .custom((value, { req }) => value === req.body.password),

    (req, res, next) => {
        const errors = validationResult(req);
        // if there are errors render the form again with sanitized values/errors messages
        if (!errors.isEmpty()) {
            res.render('signup', { title: 'Sign Up', user: req.body, errors: errors.array() });
        } else {
            //add to user to db
            bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
                if (err) {
                    return next(err);
                }
                const user = new User({
                    fname: req.body.fname,
                    lname: req.body.lname,
                    username: req.body.username,
                    password: hashedPassword,
                    memberStatus: false,
                    admin: req.body.admin_check
                }).save(err => {
                    if (err) {
                        return next(err);
                    };
                    res.redirect("/login");
                });
            });
        }
    }

]
