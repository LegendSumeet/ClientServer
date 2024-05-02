const express = require("express");
const router = express.Router();
const carController = require("../Controllers/carController");
const payment = require("../Controllers/payment")
router.get("/getallcars", carController.getAllcars);
router.post("/addcar", carController.addCar);
router.put("/editcar", carController.editCar);
router.post("/deletecar", carController.deleteCar);
router.post("/payment/:amount",payment.payment);
module.exports = router;
