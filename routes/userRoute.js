const router = require('express').Router();
const userController = require('../controllers/userController');
// const {v4: uuidv4} = require('uuid');

router.route('/').get(userController.index);
router.route('/').post(userController.addUser);
// router.route('/profile/:email').get(userController.userCheck);

router
.route('/:email')
.get(userController.singleUserByEmail)

router
.route('/:id')
.get(userController.singleUser)
//     .delete(warehouseController.deleteWarehouse)
//     .put(warehouseController.updateWarehouse);


router
.route('/:id/items')
.get(userController.userItems);

module.exports = router;
