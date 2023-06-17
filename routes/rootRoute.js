const express = require("express");
const router = new express.Router();

router.get("/", (res, req, next) => {
  res.status("200");
});

module.exports = router;
