var express    = require('express');
var controller = require('./demo.controller');
var router     = express.Router();

router.get('/user', controller.getDemoUser);

module.exports = router;
