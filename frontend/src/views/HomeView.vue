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
    state: state
  };

  let urlParams = [];
  for (const param of Object.entries(params)) {
    const key = param[0];
    const value = param[1];
    urlParams.push(`${key}=${value}`);
  }

  return `${baseUrl}?${urlParams.join('&')}`;
}

const link = generateSpotifyLink();
</script>

<template>
  <div>
    <h1>Bem vindo</h1>
    <a
      :href=link
    >
      login
    </a>
  </div>
</template>

<style></style>
