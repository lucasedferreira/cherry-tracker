const express = require("express");
const router = express.Router();

const SpotifyRequest = require("../domains/spotify/request");

router.get("/ping", async (req, res) => {
  await new SpotifyRequest().auth("2f25e56a808b4317a8034c45eaf49327", [
    "user-top-read",
  ]);
  res.send("test 1");
});

router.get("/pong", (req, res) => {
  console.log(req.query);
  res.send("test");
});

module.exports = router;
