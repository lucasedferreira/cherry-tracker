<script>
import { defineComponent } from "vue";
import axios from "axios";
import Card from "@/components/Top10Card/Card.vue";
import Nav from "@/components/Nav.vue";

export default defineComponent({
  components: { Card, Nav },
  data() {
    return {
      top10: [],
    };
  },
  methods: {
    getTop10(range) {
      axios
        .get(`${import.meta.env.VITE_API_ENDPOINT}/spotify/top10/${range}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log(response);
          this.top10 = response.data.top10;
        });
    },
  },
});
</script>

<template>
  <div class="container">
    <Nav class="nav"></Nav>
    <main class="page">
      <div>
        <button @click="getTop10('short_term')">Last month</button>
        <button @click="getTop10('medium_term')">Last 6 months</button>
        <button @click="getTop10('long_term')">All time</button>
      </div>
      <div v-if="top10.length > 0">
        <Card :top10="top10" />
      </div>
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
