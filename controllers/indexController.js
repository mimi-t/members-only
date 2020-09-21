const User = require('../models/user');
const Message = require('../models/message');
const async = require('async');

exports.index_get = function (req, res, next) {
    async.parallel({
        messages: function (callback) {
            Message.find()
                .populate('author')
                .exec(callback)
        },
        member_status: function (callback) {
            User.findById(res.locals.currentUser)
                .exec(callback)
        }
    }, function(err, results) {
        if (err) return next(err);
        res.render('index', { title: 'Chocola', messages: results.messages, isAuthorised: results.member_status });
    });
}

exports.index_delete = function(req,res,next) {
    Message.findByIdAndDelete(req.body.message_id, function(err) {
        if (err) return next(err);
        res.redirect('/');
    });
}