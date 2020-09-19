const express = require('express');
const router = express.Router();
const join_controller = require('../controllers/joinController');

/* GET sign up page. */
router.get('/', join_controller.user_join_get);

/* POST sign up page. */
router.post('/', join_controller.user_join_post);

module.exports = router;
