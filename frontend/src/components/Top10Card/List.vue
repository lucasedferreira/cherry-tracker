<script setup>
import ExternalLinkIcon from "@/components/icons/ExternalLink.vue";

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
      <!-- <div class="list__item--link"><ExternalLinkIcon /></div> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.list {
  margin: 2rem;
  font-family: $font-primary;
  font-weight: 300;

  &__title {
    font-size: 3.3rem;
    text-align: center;
    color: $color-secondary;

    @media only screen and (max-width: $bp-small) {
      font-size: 5rem;
    }
  }

  &__item {
    color: $color-white;
    font-size: 2rem;
    width: 100%;
    margin-bottom: 0.8rem;
    line-height: 3rem;

    display: grid;
    grid-template-columns: 3.5rem auto auto;
    grid-gap: 2rem;

    &--rank:before {
      content: "#";
    }

    &--name {
      // text-align: justify;
    }

    &--link {
      text-align: end;
      justify-self: end;

      * {
        width: 3rem;
        height: 3rem;
        fill: $color-white;
      }
    }

    @media only screen and (max-width: $bp-small) {
      font-size: 2.3rem;
    }
  }
}
</style>
