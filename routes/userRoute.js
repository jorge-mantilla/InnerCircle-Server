const router = require('express').Router();
const userController = require('../controllers/userController');

router.route('/').get(userController.index);
// router.route('/').post(warehouseController.addWarehouse);


router
    .route('/:userId')
    .get(userController.singleUser)
//     .delete(warehouseController.deleteWarehouse)
//     .put(warehouseController.updateWarehouse);

router
    .route('/:userId/')
    .get(userController.userItems);

module.exports = router;
