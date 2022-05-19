<script setup>
import Card from "@/components/card/Card.vue";

const top10 = [
  {
    id: 1,
    name: "Tension - Dreamcatcher",
    image: "https://i.scdn.co/image/ab67616d00001e02dd525e34b35a55ca3763e28d",
  },
  {
    id: 4,
    name: "PTT (Paint The Town) - LOONA",
    image: "",
  },
  {
    id: 2,
    name: "Fine - Taeyeon",
    image: "https://i.scdn.co/image/ab67616d00001e02dd525e34b35a55ca3763e28d",
  },
  {
    id: 3,
    name: "BOCA - Dreamcatcher",
    image: "https://i.scdn.co/image/ab67616d00001e02dd525e34b35a55ca3763e28d",
  },
];
</script>

<template>
  <div>
    <Card :top10="top10" />
  </div>
</template>
