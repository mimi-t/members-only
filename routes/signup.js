const express = require('express');
const router = express.Router();
const signup_controller = require('../controllers/signupController');

/* GET sign up page. */
router.get('/', function (req, res, next) {
    signup_controller.user_create_get;
});

/* POST sign up page. */
router.post('/', function (req, res, next) {
    signup_controller.user_create_post;
});

module.exports = router;
