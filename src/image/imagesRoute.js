const express = require("express");

const  addPhoto  = require("./imagesController");

const router = express.Router();

router.post("/", addPhoto);

module.exports = router;
