<template>
  <div class="flex flex-row justify-center overflow-hidden rounded-3xl no-wrap">
    <div
      v-for="banner in banners"
      :key="banner.id"
      class="transition-all duration-500 ease-out"
      :class="[is8[banner.id] ? 'basis-2/3' : 'basis-1/4']"
    >
      <q-img
        fit="cover"
        class="h-[500px] rounded-3xl"
        :alt="banner.alt"
        :src="banner.fname"
        @mouseenter="toggle(banner.id)"
      />
    </div>
  </div>
  <h4 class="my-6 text-lg font-extrabold sm:ml-10 sm:text-4xl">
    See what’s happening
  </h4>
  <div class="flex justify-start">
    <div v-for="(value, key) in intervals" :key="key">
      <q-btn rounded class="m-2 text-xs text-white bg-blue" :ripple="false">{{
        value
      }}</q-btn>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const banners = ref([
  {
    id: 0,
    fname: "/src/assets/img/pexels-andy-barbour-6684550.jpg",
    alt: "reading"
  },
  {
    id: 1,
    fname: "/src/assets/img/pexels-guduru-ajay-bhargav-1076081.jpg",
    alt: "hiking"
  },
  {
    id: 2,
    fname: "/src/assets/img/pexels-marcin-dampc-1684187.jpg",
    alt: "festival"
  }
]);
const is8 = ref([true, false, false]);
function toggle(i) {
  [is8.value[0], is8.value[1], is8.value[2]] = [false, false, false];
  is8.value[i] = true;
}
let intervals = [
  "Starting soon",
  "Today",
  "Tomorrow",
  "Thiss week",
  "Online",
  "In person",
  "Trending near you"
];
</script>

<style lang="scss">
.inner {
  transition: width 500ms ease-out;
}
</style>
