<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </header>
</template>

<style scoped lang="scss">
.nav {
  background-color: #f7d1dc;
}
</style>
