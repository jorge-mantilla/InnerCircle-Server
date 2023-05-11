const router = require('express').Router();
const userController = require('../controllers/userController');

router.route('/').get(userController.index);
// router.route('/').post(warehouseController.addWarehouse);


// router
//     .route('/:id')
//     .get(usersController.singleWarehouse)
//     .delete(warehouseController.deleteWarehouse)
//     .put(warehouseController.updateWarehouse);

// router
//     .route('/:id/inventories')
//     .get(warehouseController.warehouseInventories);

module.exports = router;

// router
//     .route('/')
//     .get(warehouseController.index)
//     .post(warehouseController.addWarehouse);

// router
//     .route('/:id')
//     .get(warehouseController.singleWarehouse)
//     .put(warehouseController.updateWarehouse)
//     .delete(warehouseController.deleteWarehouse);

// router
//     .route('/:id/inventories')
//     .get(warehouseController.warehouseInventories);
