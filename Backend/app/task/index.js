var express    = require('express');
var controller = require('./task.controller');
var router     = express.Router();

router.get('/', controller.index);
router.delete('/:id', controller.destroy);
router.put('/:id', controller.update);
router.get('/:id', controller.show);
router.post('/', controller.create);

module.exports = router;
