<script setup>
import Card from "@/components/card/Card.vue";

const top10 = [
  {
    id: 1,
    name: "Tension",
    artist: "Dreamcatcher",
    image: "https://i.scdn.co/image/ab67616d00001e02dd525e34b35a55ca3763e28d",
  },
  {
    id: 2,
    name: "PTT (Paint The Town)",
    artist: "LOONA",
    image: "",
  },
  {
    id: 3,
    name: "11:11",
    artist: "Taeyeon",
    image: "",
  },
  {
    id: 4,
    name: "BOCA",
    artist: "Dreamcatcher",
    image: "",
  },
  {
    id: 5,
    name: "PIRI",
    artist: "Dreamcatcher",
    image: "",
  },
  {
    id: 6,
    name: "Fine",
    artist: "Taeyeon",
    image: "",
  },
  {
    id: 7,
    name: "Scream",
    artist: "Dreamcatcher",
    image: "",
  },
  {
    id: 8,
    name: "O.O",
    artist: "NMIXX",
    image: "",
  },
  {
    id: 9,
    name: "Stay",
    artist: "Zedd, Alessia Cara",
    image: "",
  },
  {
    id: 10,
    name: "Jazz Bar",
    artist: "Dreamcatcher",
    image: "",
  },
];
</script>

<template>
  <div>
    <Card :top10="top10" />
  </div>
</template>
