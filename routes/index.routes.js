const router = require("express").Router();


//all phones data from API
router.get("/", (req, res, next) => {
  res.json("all good in here");
});

module.exports = router;
