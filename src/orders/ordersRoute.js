const express = require("express");
const ordersController = require("./ordersController");

const router = express.Router();

router.post("/:id", productController.get);


module.exports = router;