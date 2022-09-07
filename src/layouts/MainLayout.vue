<template>
  <q-layout view="hHh lpr fff">
    <div class="">
      <q-header class="static h-20 mt-5 bg-inherit">
        <q-toolbar class="flex flex-row items-center px-4 md:px-8">
          <q-toolbar-title class="flex flex-row text-red-700">
            <div class="flex flex-col justify-center mt-1">
              <div
                class="text-4xl font-[Lalezar] font-bold sm:font-normal"
                to="/"
              >
                meety
              </div>
            </div>

            <span
              class="text-5xl sm:text-6xl font-extrabold md:font-[Helvetica] italic ml-[-10px]"
              >!</span
            >
          </q-toolbar-title>
          <div class="flex flex-row items-center justify-end basis-1/2">
            <q-btn
              round
              flat
              unelevated
              :color="DarkMode ? 'white' : 'black'"
              class="hidden sm:inline-flex"
              @click="
                $q.dark.toggle();
                DarkMode = $q.dark.isActive;
              "
            >
              <q-icon v-if="DarkMode" name="dark_mode" />
              <q-icon v-else name="light_mode" />
            </q-btn>
            <q-btn
              flat
              unelevated
              :ripple="false"
              icon="language"
              label="English"
              :class="{ 'text-black': !DarkMode }"
              class="hidden sm:inline-flex"
              @click="lsd.state = true"
            />
            <div v-if="!isUserLoggedIn" class="flex flex-row flex-nowrap">
              <div v-for="(value, key) in prompt" :key="key">
                <q-btn
                  :id="key"
                  :flat="!(key == 'signup')"
                  :color="key == 'signup' ? 'primary' : null"
                  :ripple="false"
                  :label="value.message"
                  @click="prompt[key].state = true"
                />
              </div>
            </div>
          </div>
          <ProfileDropDown v-if="isUserLoggedIn" />
        </q-toolbar>
      </q-header>

      <q-page-container class="sm:my-[50px] mx-[12%] pt-0">
        <router-view />
      </q-page-container>
      <!-- Components: -->
      <LoginDialog v-if="!isUserLoggedIn" :msg="prompt" :dark="DarkMode" />
      <LSDialog :input="lsd" />
    </div>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { LoginDialog, LSDialog, ProfileDropDown } from "components";
import { useUsersStore } from "src/stores/store";
import { storeToRefs } from "pinia";
const store = useUsersStore();
const $q = useQuasar();
const { isUserLoggedIn, user } = storeToRefs(store);
const lsd = ref({
  state: false
});
const prompt = ref({
  login: {
    state: false,
    message: "Login",
    type: "login",
    alt: "Not registered?"
  },
  signup: {
    state: false,
    message: "Sign Up",
    type: "register",
    alt: "Already have an account?"
  }
});
const profileInput = ref({ state: false });
const loading = ref(false);

const DarkMode = ref(true);
$q.dark.set(true);

const logger = (i) => {
  console.log(i);
};
</script>

<style lang="scss">
.q-layout,
.q-dialog {
  .q-btn .q-focus-helper {
    display: none;
  }
}
</style>
