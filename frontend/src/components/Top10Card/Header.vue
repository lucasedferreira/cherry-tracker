<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="header">
    <img :src="image" alt="Top 1 image" class="header__img" />
    <div class="header__back header__back--cherry">최 림</div>
    <div class="header__back header__back--tracker">Tracker</div>
  </div>
</template>

<style scoped lang="scss">
.header {
  background-color: $color-secondary;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 5rem;
  overflow: hidden;

  &__back {
    width: 16rem;
    color: $color-primary;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    filter: blur(1px);
    z-index: 1;

    &--cherry {
      font-size: 12.5rem;
      font-family: "Yeon Sung", cursive;
      grid-row: 2 / -1;
      grid-column: 1 / span 2;
      white-space: nowrap;
      transform: translate(-2rem, -5rem) rotate(-58deg);
    }

    &--tracker {
      font-size: 9rem;
      font-family: "Sedgwick Ave", cursive;
      grid-row: 1 / -1;
      grid-column: 3 / span 2;
      transform: translate(5rem, 2rem) rotate(58deg);
    }

    @media only screen and (max-width: $bp-small) {
      filter: blur(2px);

      &--cherry {
        font-size: 15rem;

        transform: translate(-3vw, -4vh) rotate(-58deg);
      }

      &--tracker {
        font-size: 10rem;
        transform: translate(21vw, 1vh) rotate(58deg);
      }
    }
  }

  &__img {
    grid-row: 2 / span 2;
    grid-column: 2 / span 2;
    justify-self: center;
    align-self: end;
    border: 0.5rem solid $color-primary;
    z-index: 2;
    width: 23rem;

    @media only screen and (max-width: $bp-small) {
      border: 0.8rem solid $color-primary;
      width: 25rem;
    }
  }
}
</style>
