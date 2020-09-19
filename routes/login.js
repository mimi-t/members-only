const express = require('express');
const router = express.Router();
const login_controller = require('../controllers/loginController');

/* GET log in page. */
router.get('/', login_controller.login_get);

/* POST log in page. */
router.post('/', login_controller.login_post);

module.exports = router;
