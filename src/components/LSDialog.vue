<template>
  <q-dialog transition-show="fade" transition-hide="fade" v-model="input.state">
    <q-card class="flex flex-col">
      <q-card-section class="q-pb-sm">
        <div class="text-h6">Choose your language</div>
        <div class="text-subtitle2">Available Options:</div>
      </q-card-section>
      <q-card-section>
        <div class="flex flex-row space-x-10 [&>*]:flex p-1">
          <q-radio
            class="flex flex-row"
            v-model="language"
            checked-icon="task_alt"
            unchecked-icon="panorama_fish_eye"
            val="line"
            label="Persian"
          />
          <q-radio
            v-model="language"
            checked-icon="task_alt"
            unchecked-icon="panorama_fish_eye"
            val="rectangle"
            label="English"
          />
          <q-radio
            v-model="language"
            checked-icon="task_alt"
            unchecked-icon="panorama_fish_eye"
            val="ellipse"
            label="French"
          />
          <q-radio
            v-model="language"
            checked-icon="task_alt"
            unchecked-icon="panorama_fish_eye"
            val="polygon"
            label="Spanish"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps(["input"]);
const input = ref(props.input);
const language = ref(false);
</script>
