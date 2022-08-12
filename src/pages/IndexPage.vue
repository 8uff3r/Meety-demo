<template>
  <div class="justify-center row www no-wrap" id="cc-slides">
    <div
      v-for="banner in banners"
      :key="banner.id"
      class="inner"
      :class="[is8[banner.id] ? 'col-8' : 'col-3']"
    >
      <q-img
        fit="cover"
        @mouseenter="toggle(banner.id)"
        class="i3"
        :alt="banner.alt"
        :src="banner.fname"
      />
    </div>
  </div>
  <h4 class="mt-6 ml-10 text-2xl">See what’s happening</h4>
  <pre>
z
z
z
z
z
z
z
z
  </pre>
</template>

<script setup>
import { ref } from "vue";
const banners = ref([
  {
    id: 0,
    fname: "/src/assets/img/pexels-andy-barbour-6684550.jpg",
    alt: "reading",
  },
  {
    id: 1,
    fname: "/src/assets/img/pexels-guduru-ajay-bhargav-1076081.jpg",
    alt: "hiking",
  },
  {
    id: 2,
    fname: "/src/assets/img/pexels-marcin-dampc-1684187.jpg",
    alt: "festival",
  },
]);
const is8 = ref([true, false, false]);
function toggle(i) {
  [is8.value[0], is8.value[1], is8.value[2]] = [false, false, false];
  is8.value[i] = true;
}
</script>

<style lang="scss">
.www {
  width: 100%;
  height: 60%;
  overflow: hidden;
}
.i3 {
  height: 500px;
  border-radius: 20px;
}

.inner {
  transition: width 500ms ease-out;
}
#cc-slides {
  border-radius: 20px;
}
</style>
