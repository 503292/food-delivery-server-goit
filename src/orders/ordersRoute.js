const express = require("express");
const ordersController = require("./ordersController");

const router = express.Router();

router.post("/", ordersController.postOrder);

module.exports = router;
