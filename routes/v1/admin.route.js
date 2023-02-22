const express = require("express");
const cookieParser = require('cookie-parser');
const router = express.Router();
const adminController = require("../../controllers/admin.controller");
const verifyToken = require("../../veriyToken")
const validations = require("../../validations/validation")
const validate = require("../../middlewares/validate");

router.get('/allBooks',adminController.showBooks);
router.post('/addBooks',validate(validations.addBook),adminController.addBooks);
router.post('/updateBooks/:bookId',validate(validations.updateBook),adminController.updateBooks);
router.delete('/deleteBooks/:bookId',adminController.deleteBooks);
router.get('/reservedBooks',adminController.reservedBooks);

module.exports = router;