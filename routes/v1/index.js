const express = require("express");
const adminRoute = require("./admin.route");
const userRoute = require("./user.route");
const reservationRoute = require("./reservation.route");
const router = express.Router();
const verifyToken=require("../../veriyToken")

router.use('/admin',adminRoute);
router.use('/admin',verifyToken,adminRoute);
router.use('/user',userRoute);
router.use('/reservation',reservationRoute);

module.exports = router;