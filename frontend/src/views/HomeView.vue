<script setup>
function generateRandomString(length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

function generateSpotifyLink() {
  const baseUrl = "https://accounts.spotify.com/authorize";

  const state = generateRandomString(16);
  localStorage.setItem("state", state);

  const params = {
    response_type: "code",
    client_id: "e769581041ff48c5b45309cfc81c2966",
    scope: "user-read-private user-read-email user-top-read",
    redirect_uri: `${import.meta.env.VITE_APP_URL}/callback`,
    state: state,
  };

  let urlParams = [];
  for (const param of Object.entries(params)) {
    const key = param[0];
    const value = param[1];
    urlParams.push(`${key}=${value}`);
  }

  return `${baseUrl}?${urlParams.join("&")}`;
}

const link = generateSpotifyLink();
</script>

<template>
  <div class="home">
    <div class="title">Start seeing what you listen</div>
    <div class="login">
      <img class="circle" src="/circle.png" alt="Hand Drown Circle" />
      <a class="login-button" :href="link">
        <img
          class="login-button__image"
          src="/spotify-logo-white.png"
          alt="Spotify Logo"
        />
        <span class="login-button__text">Login with Spotify</span>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.home {
  height: 100vh;
}

.title {
  padding-top: 10vh;
  font-size: 10rem;
  color: $color-white;
  text-align: center;
  line-height: 11rem;

  @media only screen and (max-width: $bp-small) {
    font-size: 7rem;
    line-height: 8rem;
  }
}

.login {
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  width: 35vw;

  @media only screen and (max-width: $bp-small) {
    width: 80vw;
  }
}

.login-button {
  cursor: pointer;
  text-decoration: none;

  position: absolute;
  background-color: #1db954;
  border-radius: 10px;
  width: 30rem;
  padding: 1rem 1.5rem;

  display: flex;

  &__image {
    width: 5rem;
    height: 5rem;
    align-self: center;
  }

  &__text {
    width: 100%;
    margin-left: 2rem;
    align-self: center;

    color: $color-primary;
    font-size: 2rem;
    font-weight: bold;
  }
}
</style>
