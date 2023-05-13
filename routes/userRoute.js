const router = require('express').Router();
const userController = require('../controllers/userController');
// const {v4: uuidv4} = require('uuid');

router.route('/').get(userController.index);
router.route('/').post(userController.addUser);


router
.route('/:id')
.get(userController.singleUser)
//     .delete(warehouseController.deleteWarehouse)
//     .put(warehouseController.updateWarehouse);

router
.route('/:id/items')
.get(userController.userItems);

module.exports = router;
// router.post("/", async (req,res) => {

//     const { user_name, email, image} = req.body;

//     const newUser = {
//         id: uuidv4(), // generate a new UUID for the user
//         user_name,
//         email,
//         image
//       };

//     try {
//         await knex("users").insert(newUser);
//         res.status(201).send("Registered successfully");
//     }   catch (error) {
//             console.log(error);
//             res.status(400).send("Failed registration");
//             }
//         });
