<!-- <template>
  <q-page class="flex flex-center">
     <div v-touch-pan="handler">...</div>
    <div v-touch-swipe="handler">...</div>
    <div v-ripple>Click me. I got ripples.</div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>-->
<template>
  <div class="q-pa-md row www">
    <div :class="{ 'col-4': is4, 'col-8': !is4 }">
      <q-img
        @mouseenter="change1"
        class="rounded-borders full-height"
        src="https://cdn.quasar.dev/img/mountains.jpg"
      />
    </div>
    <div class="col">
      <q-img
        @mouseenter="change2"
        :class="{ 'col-4': !is4, 'col-8': is4 }"
        class="rounded-borders full-height"
        src="https://cdn.quasar.dev/img/parallax1.jpg"
      />
    </div>
  </div>

  <q-btn @click="toggle">kkk</q-btn>
</template>

<script setup>
import { ref } from "vue";
const slide = ref(1);
const is4 = ref(true);
function toggle() {
  is4.value = !is4.value;
}
function change2() {
  is4.value = true;
}
function change1() {
  is4.value = false;
}
</script>

<style lang="sass">
.www
  max-width: 80%
</style>
