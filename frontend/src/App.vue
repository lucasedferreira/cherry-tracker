<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";

import * as htmlToImage from "html-to-image";
htmlToImage.toPng(document.getElementById("app")).then(function (dataUrl) {
  download(dataUrl, "my-node.png");
});
</script>

<template>
  <div class="container">
    <header class="nav">Header</header>
    <div class="card" id="top10">
      <div class="header">
        <img
          src="https://i.scdn.co/image/ab67616d00001e02dd525e34b35a55ca3763e28d"
          alt="top1"
          class="header__img"
        />
        <div class="header__back header__back--cherry">Cherry</div>
        <div class="header__back header__back--tracker">Tracker</div>
      </div>
      <div class="list">
        <div class="transition"></div>
        <div>item 1</div>
        <div>item 2</div>
        <div>item 3</div>
        <div>item 4</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./assets/base.scss";

.nav {
  background-color: #c0c0c0;
  grid-column: full-start / full-end;
}

.card {
  background-color: #010101;
  grid-column: center-start / center-end;

  @media only screen and (max-width: $bp-small) {
    grid-column: 1 / -1;
  }
}

.header {
  background-color: #ec1e1e;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 5rem;
  overflow: hidden;

  &__back {
    width: 16rem;
    font-family: "Moon Dance", cursive;
    font-size: 12.5rem;
    color: #010101;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    filter: blur(1px);
    z-index: 1;

    &--cherry {
      grid-row: 2 / -1;
      grid-column: 1 / span 2;
      transform: translateX(-5rem) rotate(-58deg);
    }

    &--tracker {
      grid-row: 1 / -1;
      grid-column: 3 / span 2;
      transform: translateX(9rem) rotate(58deg);
    }

    @media only screen and (max-width: $bp-small) {
      font-size: 15rem;
      filter: blur(2px);

      &--cherry {
        transform: translate(-9vw, 3vh) rotate(-58deg);
      }

      &--tracker {
        transform: translate(27vw, -2vh) rotate(58deg);
      }
    }
  }

  &__img {
    grid-row: 2 / span 2;
    grid-column: 2 / span 2;
    justify-self: center;
    align-self: end;
    border: 0.5rem solid #010101;
    z-index: 2;
    width: 23rem;
    // width: 100%;
    // height: 100%;
    // object-fit: cover;
    // display: block;

    @media only screen and (max-width: $bp-small) {
      border: 0.8rem solid #010101;
      width: 25rem;
    }
  }
}

.transition {
  background-color: #ec1e1e;
  padding: 5rem 0;
  transform: translateY(-1px);
  clip-path: polygon(
    100% 0%,
    0% 0%,
    0% 86.89%,
    1% 86.81%,
    2% 86.59%,
    3% 86.21%,
    4% 85.69%,
    5% 85.03%,
    6% 84.23%,
    7% 83.3%,
    8% 82.24%,
    9% 81.05%,
    10% 79.75%,
    11% 78.35%,
    12% 76.85%,
    13% 75.26%,
    14% 73.59%,
    15% 71.85%,
    16% 70.05%,
    17% 68.2%,
    18% 66.32%,
    19% 64.42%,
    20% 62.5%,
    21% 60.58%,
    22% 58.67%,
    23% 56.78%,
    24% 54.93%,
    25% 53.12%,
    26% 51.37%,
    27% 49.68%,
    28% 48.07%,
    29% 46.55%,
    30% 45.12%,
    31% 43.8%,
    32% 42.59%,
    33% 41.51%,
    34% 40.54%,
    35% 39.72%,
    36% 39.02%,
    37% 38.48%,
    38% 38.07%,
    39% 37.82%,
    40% 37.71%,
    41% 37.75%,
    42% 37.94%,
    43% 38.29%,
    44% 38.77%,
    45% 39.41%,
    46% 40.18%,
    47% 41.08%,
    48% 42.12%,
    49% 43.28%,
    50% 44.55%,
    51% 45.93%,
    52% 47.42%,
    53% 48.99%,
    54% 50.64%,
    55% 52.37%,
    56% 54.16%,
    57% 55.99%,
    58% 57.87%,
    59% 59.77%,
    60% 61.68%,
    61% 63.6%,
    62% 65.52%,
    63% 67.41%,
    64% 69.27%,
    65% 71.09%,
    66% 72.85%,
    67% 74.56%,
    68% 76.18%,
    69% 77.72%,
    70% 79.17%,
    71% 80.52%,
    72% 81.75%,
    73% 82.86%,
    74% 83.85%,
    75% 84.71%,
    76% 85.43%,
    77% 86.01%,
    78% 86.45%,
    79% 86.73%,
    80% 86.87%,
    81% 86.86%,
    82% 86.7%,
    83% 86.39%,
    84% 85.93%,
    85% 85.33%,
    86% 84.59%,
    87% 83.71%,
    88% 82.7%,
    89% 81.57%,
    90% 80.32%,
    91% 78.96%,
    92% 77.5%,
    93% 75.94%,
    94% 74.3%,
    95% 72.59%,
    96% 70.82%,
    97% 68.99%,
    98% 67.13%,
    99% 65.23%,
    100% 63.31%
  );
}

.list {
  transform: translateY(-10rem);
  background-color: #010101;
}
</style>
