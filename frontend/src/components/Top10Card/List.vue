<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="list">
    <h2 class="list__title">Top Songs</h2>
    <div class="list__item" v-for="(item, index) in items" :key="item.id">
      <div class="list__item--rank">{{ ++index }}</div>
      <div class="list__item--name">{{ `${item.name} - ${item.artist}` }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.list {
  margin: 5rem 2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;

  &__title {
    font-size: 4rem;
    text-align: center;
    color: #ec1e1e;

    @media only screen and (max-width: $bp-small) {
      font-size: 5rem;
    }
  }

  &__item {
    color: #f7d1dc;
    font-size: 2.4rem;

    width: 100%;
    display: grid;
    grid-template-columns: 3.5rem auto;
    grid-gap: 2rem;

    &--rank {
      grid-column: 1 / 2;

      &:before {
        content: "#";
      }
    }

    &--name {
      grid-column: 2 / -1;
    }

    @media only screen and (max-width: $bp-small) {
      font-size: 3rem;
    }
  }
}
</style>
