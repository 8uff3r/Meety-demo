<template>
  <div class="q-pa-md">
    <q-btn-dropdown color="primary" label="Account Settings">
      <!-- <div class="row no-wrap q-pa-md">
        <div class="column">
          <div class="text-h6 q-mb-md">Settings</div>
          <q-toggle v-model="mobileData" label="Use Mobile Data" />
          <q-toggle v-model="bluetooth" label="Bluetooth" />
        </div>

        <q-separator vertical inset class="q-mx-lg" />

        <div class="items-center column">
          <q-avatar size="72px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>

          <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

          <q-btn color="primary" label="Logout" push size="sm" v-close-popup />
        </div>
      </div> -->
      <q-card>
        <q-card-section
          class="grid items-center justify-start grid-flow-col gap-4"
        >
          <!-- <q-avatar
            color="red"
            text-color="white"
            icon="directions"
            size="md"
          /> -->
          <!-- {{ username }} -->
          <q-avatar size="40px" class="grid">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>

          <div>John Doe</div>

          <q-btn
            v-close-popup
            color="primary"
            label="Logout"
            rounded
            size="sm"
            unelevated
            class="h-8 mt-1"
            @click="logout"
          />
        </q-card-section>
        <q-card-actions class="flex flex-col w-96">
          <q-tabs
            v-model="tab"
            dense
            align="justify"
            class="flex flex-row w-full text-white shadow-md bg-primary"
            :breakpoint="0"
          >
            <q-tab name="mails" label="Preferences" class="basis-1/2" />
            <q-tab name="alarms" label="Info" class="basis-1/2" />
          </q-tabs>
          <q-tab-panels v-model="tab" animated class="">
            <q-tab-panel name="mails" class="flex">
              <div>Change UI primary color:</div>
              <div class="flex flex-row items-center justify-center w-full">
                <q-btn-toggle
                  v-model="colorBtnToggleModel"
                  class="mt-3"
                  :toggle-color="colorBtnToggleModel"
                  :options="[
                    { label: 'Red', value: 'red' },
                    { label: 'Blue', value: 'blue' },
                    { label: 'Green', value: 'green' }
                  ]"
                />
              </div>
            </q-tab-panel>
            <q-tab-panel name="alarms">
              <div class="text-h6">Alarms</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
            <q-tab-panel name="movies">
              <div class="text-h6">Movies</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
          </q-tab-panels>
        </q-card-actions>
      </q-card>
    </q-btn-dropdown>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, watch } from "vue";
import { useUsersStore } from "stores/store";
import { storeToRefs } from "pinia";
import { setCssVar } from "quasar";

const store = useUsersStore();
const username = ref(store.user.username);
const tab = ref("mails");
const { color } = storeToRefs(store);
const colorBtnToggleModel = ref("red");
const router = useRouter();
const route = useRoute();

const setColor = (i) => {
  switch (i) {
    case "red":
      return "#b91c1c";
    case "blue":
      return "#388698";
    case "green":
      return "#0dbc79";
  }
};

const logout = () => {
  store.setToken(null);
  store.setUser(null);
  // router.push({ name: "index" });
};

watch(colorBtnToggleModel, () => {
  store.setColor(setColor(colorBtnToggleModel.value));
  setCssVar("primary", color.value);
});
</script>
<style lang="scss" scoped></style>
