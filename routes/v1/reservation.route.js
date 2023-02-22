const express = require("express");
const router = express.Router();
const reservationController = require("../../controllers/reservation.controller");
const validations = require("../../validations/validation")
const validate = require("../../middlewares/validate");


router.post('/register',validate(validations.register),reservationController.register);
router.post('/renewal',validate(validations.renewal),reservationController.renewal);
router.post('/return',validate(validations.returnBook),reservationController.returnBook);

module.exports = router;