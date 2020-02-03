const express = require("express");
const productController = require("./productsController");

const router = express.Router();

router.get("/", productController.get);
router.get("/:id", productController.getById);
router.post("/", productController.addProduct);


module.exports = router;
