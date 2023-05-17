const router = require('express').Router();
const itemController = require('../controllers/itemController');

router
    .route('/')
    .get(itemController.index)
    .post(itemController.addItem);

router
    .route('/:id')
    .get(itemController.singleItem)
    .delete(itemController.deleteItem)
    .put(itemController.updateItem);

module.exports = router;