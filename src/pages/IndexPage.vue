<template>
  <div
    class="flex flex-row justify-start overflow-hidden rounded-3xl flex-nowrap"
  >
    <div
      v-for="banner in banners"
      :key="banner.id"
      class="transition-all duration-500 ease-out"
      :class="[
        is8[banner.id]
          ? 'basis-full sm:basis-2/3'
          : 'basis-0 sm:basis-1/5 sm:w-[500px]'
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
  <h4 class="headings">See what's happening</h4>
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
    :loop-fill-group-with-blank="false"
    :space-between="10"
    :modules="modules"
    :loop="false"
    :pagination="false"
    slides-per-view="auto"
    :slides-per-group="4"
    :breakpoints="swiperOptions.breakpoints"
    disabled-class="hidden"
    :navigation="true"
    class="flex flex-row gap-4 overflow-hidden flex-nowrap snaps"
  >
    <swiper-slide
      v-for="(event, key) in UpcomingEvents"
      :key="key"
      class="w-[265px]"
    >
      <q-card
        :id="key"
        class="h-[400px] w-full bg-transparent no-shadow rounded-3xl"
      >
        <img class="rounded-3xl" src="img/pexels-andy-barbour-6684550.jpg" />
        <q-card-section>
          <button class="text-base" @click="showEventDialog.state = true">
            {{ event }}
          </button>
          <div class="text-xs">by John Doe</div>
        </q-card-section>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </q-card-section>
      </q-card>
    </swiper-slide>
  </swiper>
  <EventDialog :show-event-dialog="showEventDialog" />
</template>

<script setup>
import { ref } from "vue";
import EventDialog from "src/components/EventDialog.vue";
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
    fname: "img/pexels-andy-barbour-6684550.jpg",
    alt: "reading"
  },
  {
    id: 1,
    fname: "img/pexels-guduru-ajay-bhargav-1076081.jpg",
    alt: "hiking"
  },
  {
    id: 2,
    fname: "img/pexels-marcin-dampc-1684187.jpg",
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
const modules = [Pagination, Navigation];
const slide = ref("style");

const lorem =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.";
const swiperOptions = ref({
  breakpoints: {
    300: {
      slidesPerGroup: 1
    },
    1537: {
      slidesPerGroup: 4
    }
  }
});

const showEventDialog = ref({ state: false });
</script>
<style lang="scss">
.swiper-button-next::after,
.swiper-rtl .swiper-button-prev::after {
  // content: url("src/asslets/img/arrow_right.svg");
  content: "chevron_right";
  border-radius: 100%;
  background-color: white;
  box-shadow: 0px 0px 6px black;
}
.swiper-button-prev::after,
.swiper-rtl .swiper-button-next::after {
  content: "chevron_left";
  border-radius: 100%;
  background-color: white;
  box-shadow: 0px 0px 6px black;
}
.swiper-button-prev::after,
.swiper-button-next::after {
  font-family: "Material Icons";
  font-size: 30px;
  text-transform: none !important;
  letter-spacing: 0;
  font-variant: initial;
  line-height: 1;
}
.swiper-button-disabled {
  display: none;
}
</style>
