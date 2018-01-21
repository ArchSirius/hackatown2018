var express    = require('express');
var controller = require('./demo.controller');
var router     = express.Router();

router.get('/user', controller.getDemoUser);
router.post('/reset', controller.resetDatabase);

module.exports = router;
