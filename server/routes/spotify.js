const express = require("express");
const router = express.Router();

const SpotifyService = require("../domains/spotify/service");
const SpotifyHermes = require("../domains/spotify/hermes");
const UserService = require("../domains/user/service");
const UserRepository = require("../domains/user/repository");

router.get("/test", async (req, res) => {
  console.log("=== entrou ===");
  const accessToken =
    "BQA2zWzivm4aBhdG2qYTsKJvC4UH7r1k8wP5QZnsKfE0tqNN5eamSv-GEXENpBHb6Cyanmj_o8d2t620l3idnTfk1II32wGIio2fteTqbfEuWXPp0cz58mWU5YzPf4hyHxDUxJmmyvPlqhhu9vqYa1MJLcSkBe0VmiEoEOronFGNCw";
  const refreshToken =
    "AQDZSOZrCtDcK-6oe6onye-hCj89hSL3_7dCywCGMRF3eLPfwdMoF_BEkCEzAPF4sjh5VvRbWYOE0PmetG5JwWnZPRUVrooB10zoU0S_L8Gx5RcaMhupqXUdz-ILIO_Tq3I";
  const test = await new SpotifyService().getUserInfo(
    accessToken,
    refreshToken
  );
  res.send(test);
  console.log("saiu");
});

router.post("/auth", async (req, res) => {
  try {
    const response = await new SpotifyHermes().auth(req.body.code);
    const tokens = response.data;
    const spotifyUser = await new SpotifyService().getUserInfo(
      tokens.access_token,
      tokens.refresh_token
    );
    const searchUser = await new UserRepository().findOne({
      where: {
        spotify_id: spotifyUser.id,
      }
    });
    let userId;
    if (searchUser) {
      userId = searchUser.id;
    } else {
      const createdUser = await new UserService().saveUserFromSpotify(
        spotifyUser,
        tokens.access_token,
        tokens.refresh_token
      );
      userId = createdUser.id;
    }

    const token = new Buffer.from(userId, "utf8").toString("base64");
    res.send(token);
  } catch (error) {
    console.log(error);
    res.status(400);
    res.send("Error to authenticate with Spotify");
  }
});

router.get("/top10/:range", async (req, res) => {
  const header = req.headers.authorization || "";
  const token = header.split(/\s+/).pop() || "";
  const userId = Buffer.from(token, "base64").toString();
  const user = await new UserRepository().getById(userId);
  const top10 = await new SpotifyService().getTopMusics(
    user.spotify_access_token,
    user.spotify_refresh_token,
    req.params.range
  );
  res.send({ top10 });
});

const Top10Service = require("../domains/topMusic/service");
router.get("/image", async (req, res) => {
  await new Top10Service().generateImage();
  res.send("test");
});

module.exports = router;
