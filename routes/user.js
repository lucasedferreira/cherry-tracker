const express = require("express");
const router = express.Router();

const TopMusicService = require('../domains/topMusic/service');

router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

router.get("/", async (req, res) => {
  await new TopMusicService().saveTodayTop10();
  res.send("user");
});

module.exports = router;