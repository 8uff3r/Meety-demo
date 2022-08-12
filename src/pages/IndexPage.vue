<template>
  <div
    class="flex flex-row justify-center overflow-hidden rounded-3xl flex-nowrap"
  >
    <div
      v-for="banner in banners"
      :key="banner.id"
      class="transition-all duration-500 ease-out"
      :class="[
        is8[banner.id] ? 'basis-full sm:basis-2/3' : 'basis-0 sm:basis-1/4'
      ]"
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
  <h4 class="headings">See what’s happening</h4>
  <div class="flex justify-start">
    <div v-for="(value, key) in intervals" :key="key">
      <q-btn
        rounded
        class="m-2 text-xs text-white bg-red-700"
        :ripple="false"
        >{{ value }}</q-btn
      >
    </div>
  </div>
  <div class="headings">Upcoming online events</div>
  <swiper
    :slides-per-view="4.5"
    :space-between="0"
    :modules="modules"
    :slides-per-group="4"
    :loop="true"
    :loop-fill-group-with-blank="true"
    :navigation="true"
    class="flex flex-row gap-4 overflow-scroll flex-nowrap snaps"
  >
    <swiper-slide v-for="(event, key) in UpcomingEvents" :key="key">
      <q-card :id="key" class="w-64 bg-transparent no-shadow rounded-3xl">
        <img
          class="rounded-3xl"
          src="/src/assets/img/pexels-andy-barbour-6684550.jpg"
        />
        <q-card-section>
          <div class="text-h6">{{ event }}</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </q-card-section>
      </q-card>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { ref } from "vue";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

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
let UpcomingEvents = [
  "Black Women's Writing Group",
  "INFP, Introverts, Shy and International Friends Hang out and Chat",
  "Establishing Your Business Entity",
  "Black Women's Writing Group",
  "INFP, Introverts, Shy and International Friends Hang out and Chat",
  "Establishing Your Business Entity",
  "Black Women's Writing Group",
  "INFP, Introverts, Shy and International Friends Hang out and Chat",
  "Establishing Your Business Entity"
];
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
const modules = [Pagination, Navigation];
</script>
<style lang="scss">
// .snaps {
//   scroll-snap-type: inline mandatory;
//   scroll-padding-inline: 1rem;
// }

// .snaps > * {
//   scroll-snap-align: start;
// }
</style>
