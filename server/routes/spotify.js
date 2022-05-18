const express = require("express");
const router = express.Router();

const SpotifyService = require("../domains/spotify/service");
router.get("/test", async (req, res) => {
  console.log("=== entrou ===");
  const accessToken = "BQA2zWzivm4aBhdG2qYTsKJvC4UH7r1k8wP5QZnsKfE0tqNN5eamSv-GEXENpBHb6Cyanmj_o8d2t620l3idnTfk1II32wGIio2fteTqbfEuWXPp0cz58mWU5YzPf4hyHxDUxJmmyvPlqhhu9vqYa1MJLcSkBe0VmiEoEOronFGNCw";
  const refreshToken = "AQDZSOZrCtDcK-6oe6onye-hCj89hSL3_7dCywCGMRF3eLPfwdMoF_BEkCEzAPF4sjh5VvRbWYOE0PmetG5JwWnZPRUVrooB10zoU0S_L8Gx5RcaMhupqXUdz-ILIO_Tq3I";
  const test = await new SpotifyService().getUserInfo(accessToken, refreshToken);
  res.send(test);
  console.log("saiu");
});

router.get("/auth", async (req, res) => {
  try {
    const code = "AQCm8YBTmmS3GEhVBNHQKd4zSJhcmPwqZe4QKkbYuxQ_wzsWih82mHdSrR3oM0E29JV6kkQKCAMIS70G_S4gGELsMAAyQ7ihfurqIv_c9NFGcEj4-8UEhUDuLtEdG0e4u2RCVqlOXuzW2dghtpH32FOx_vqIk1p0HQI2W-fj2FEbm0w2OWoMqqU2sQb26EX2ynclLgk";
    const response = await new SpotifyHermes().auth(code);
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    console.log(error);
  }
});

const SpotifyHermes = require("../domains/spotify/hermes");
// router.get("/ping", async (req, res) => {
//   const test = await new SpotifyHermes().auth(process.env.SPOTIFY_CLIENT_ID);
//   console.log(test);
//   res.send("test 1");
// });

// router.get("/pong", (req, res) => {
//   console.log(req.query);
//   res.send("test");
// });

const Top10Service = require('../domains/topMusic/service')
router.get("/image", async (req, res) => {
  await new Top10Service().generateImage();
  res.send("test");
});

module.exports = router;
