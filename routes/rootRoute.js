const express = require("express");
const router = new express.Router();

router.get("/", (req, res, next) => {
  res.sendStatus("200");
});

module.exports = router;
