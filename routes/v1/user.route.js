const express = require("express");
const router = express.Router();
// const reservationController = require("../../controllers/reservation.controller");
// const userCrudController = require("../../controllers/userCrud.controller");
const loginController = require("../../controllers/login.controller");
const userController = require("../../controllers/user.controller");
const validations = require("../../validations/validation")
const validate = require("../../middlewares/validate");



router.post('/login',validate(validations.login),loginController.login);
router.post('/userBooks',validate(validations.userBooks),userController.detailsByUserId);

router.get('/allUsers',userController.showUsers);
router.post('/addUser',validate(validations.signup),userController.addUser);
router.post('/updateUser/:userId',validate(validations.userUpdate),userController.updateUser);
router.delete('/deleteUser/:userId',userController.deleteUser);



module.exports = router;