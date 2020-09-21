const Message = require('../models/message');
const { body, validationResult } = require('express-validator');


exports.create_message_get = function (req, res) {
    res.render('create', { title: 'Create New Message' });
}

exports.create_message_post = [
    //validate and sanitise input
    body('title').trim().isLength({ min: 1 }).withMessage('Title required.').escape(),
    body('text').trim().isLength({ min: 1 }).withMessage('Message required.').escape(),

    (req, res, next) => {
        const errors = validationResult(req);
        // if there are errors render the form again with sanitized values/errors messages
        if (!errors.isEmpty()) {
            res.render('create', { title: 'Create New Message', message: req.body, errors: errors.array() });
        } else {
            const message = new Message({
                title: req.body.title,
                text: req.body.text,
                time: new Date(),
                author: res.locals.currentUser._id
            }).save(err => {
                if (err) return next(err);
                res.redirect('/');
            })
        }
    }
]
