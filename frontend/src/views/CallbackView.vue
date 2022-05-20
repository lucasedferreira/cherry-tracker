<script setup>
import axios from "axios";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const params = route.query;
if (params?.state !== localStorage.getItem("state")) {
  router.push({ name: "home" });
}

axios.post(`${import.meta.env.VITE_API_ENDPOINT}/spotify/auth`, {
  code: params.code,
}).then(response => {
  localStorage.setItem("token", response.data);
  router.push({ name: "toplist" });
});
</script>

<template>
  <div>
    <h1>Loading</h1>
  </div>
</template>

<style></style>
