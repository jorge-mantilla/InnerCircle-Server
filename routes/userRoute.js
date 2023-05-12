const router = require('express').Router();
const userController = require('../controllers/userController');

router.route('/').get(userController.index);
// router.route('/').post(warehouseController.addWarehouse);


router
    .route('/:id')
    .get(userController.singleUser)
//     .delete(warehouseController.deleteWarehouse)
//     .put(warehouseController.updateWarehouse);

router
    .route('/:id/items')
    .get(userController.userItems);

module.exports = router;
