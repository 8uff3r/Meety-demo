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
                MEETY
              </div>
            </div>

            <span
              class="text-5xl sm:text-6xl font-extrabold md:font-[Helvetica] italic ml-[-4px]"
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
              @click="lsd.state = true"
              :class="{ 'text-black': !DarkMode }"
              class="hidden sm:inline-flex"
            />
            <div class="flex flex-nowrap">
              <div v-for="(value, key) in prompt" :key="key">
                <q-btn
                  flat
                  :ripple="false"
                  :id="key"
                  :label="value.message"
                  @click="prompt[key].state = true"
                />
              </div>
            </div>
          </div>
        </q-toolbar>
      </q-header>

      <q-page-container class="my-[100px] mx-[12%] pt-0">
        <router-view />
      </q-page-container>
      <!-- Components: -->
      <LoginDialog :msg="prompt" :dark="DarkMode" />
      <LSDialog :input="lsd" />
    </div>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import LoginDialog from "/src/components/LoginDialog.vue";
import LSDialog from "/src/components/LSDialog.vue";
const $q = useQuasar();

const prompt = ref({
  login: { state: false, message: "Login", alt: "Not registered?" },
  signup: { state: false, message: "Sign Up", alt: "Already have an account?" },
});
const loading = ref(false);
// const CurrentLanguage = ref("English");
const lsd = ref({ state: false });

const DarkMode = ref(false);
</script>

<style lang="scss">
.body--dark {
  #login {
    color: white;
  }
  #signup {
    background-color: white;
    color: black;
  }
}
.body--light {
  #login {
    color: black;
  }
  #signup {
    background-color: black;
    color: white;
  }
}
.q-btn .q-focus-helper {
  display: none;
}
</style>
