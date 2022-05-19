<script setup>
import { RouterView } from 'vue-router'

import Nav from "@/components/Nav.vue";
</script>

<template>
  <div class="container">
    <Nav class="nav"></Nav>
    <main class="page">
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss">
.nav {
  grid-column: full-start / full-end;
}

.page {
  grid-column: center-start / center-end;
  @media only screen and (max-width: $bp-small) {
    grid-column: 1 / -1;
  }
}
</style>
