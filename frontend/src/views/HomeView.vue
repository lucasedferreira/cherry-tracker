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
    <div class="home__content">
      <div class="title">Start <strong>seeing</strong> what you <strong>listen</strong></div>
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
    <img src="/note-1.png" alt="Note 1" class="home__images home__images--1" />
    <img src="/note-2.png" alt="Note 2" class="home__images home__images--2" />
    <img src="/earphones.png" alt="Ear Phones" class="home__images home__images--3" />
  </div>
</template>

<style lang="scss">
.home {
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(10, 10vw);
  grid-template-rows: repeat(10, 10vh);

  &__content {
    grid-column: 3 / 9;
    grid-row: 2 / -1;

    @media only screen and (max-width: $bp-medium) {
      grid-column: 2 / 10;
    }

    @media only screen and (max-width: $bp-small) {
      grid-column: 1 / -1;
    }
  }

  &__images {
    &--1 {
      width: 5rem;
      grid-column: 9;
      grid-row: 2;
      justify-self: end;

      @media only screen and (max-width: $bp-medium) {
        grid-column: 10;
        justify-self: center;
      }

      @media only screen and (max-width: $bp-small) {
        width: 3rem;
        grid-column: 9;
        grid-row: 4;
        justify-self: end;
        align-self: start;
      }
    }

    &--2 {
      width: 5rem;
      grid-column: 3;
      grid-row: 5;

      @media only screen and (max-width: $bp-medium) {
        grid-column: 2;
        grid-row: 5;
      }

      @media only screen and (max-width: $bp-small) {
        width: 4rem;
        grid-column: 2;
        grid-row: 4;
        justify-self: center;
        align-self: end;
      }
    }

    &--3 {
      height: 35rem;
      grid-column: 7;
      grid-row: 7 / -1;
      align-self: end;

      @media only screen and (max-width: $bp-medium) {
        height: 30rem;
        grid-column: 1 / -1;
        justify-self: end;
      }
    }
  }
}

.title {
  // padding-top: 10vh;
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
  width: 35rem;
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

  &:hover {
    background-color: #20C75A;
  }
}
</style>
