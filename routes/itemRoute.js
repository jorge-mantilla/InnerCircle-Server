const router = require('express').Router();
const itemController = require('../controllers/itemController');

router
    .route('/')
    .get(itemController.index)
    // .post(inventoryController.addInventory);

router
    .route('/:id')
    .get(itemController.singleItem)
//     .delete(inventoryController.deleteInventory);

module.exports = router;