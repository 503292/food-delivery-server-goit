const { Router } = require("express");

const router = Router();

router.get("/", (req, res, next) => {
  res.status(200).json("Hello main");
});

module.exports = router;
