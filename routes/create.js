var express = require('express');
var router = express.Router();
const create_controller = require('../controllers/createController');

/* GET create page. */
router.get('/', create_controller.create_message_get);

/* POST create page. */
router.post('/', create_controller.create_message_post);


module.exports = router;
