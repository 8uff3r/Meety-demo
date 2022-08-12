<template>
  <div v-for="(value, key) in prompt" :key="key" :class="{ dark: dark }">
    <q-dialog
      v-model="value.state"
      transition-show="fade"
      transition-hide="fade"
      persistent
      align="center"
    >
      <q-card style="min-width: 350px" :class="{ 'bg-black': dark }">
        <q-card-section>
          <q-img
            id="acc-img"
            src="/src/assets/img/account-icon.png"
            spinner-color="primary"
            spinner-size="82px"
          />
        </q-card-section>
        <q-card-section>
          <div class="text-h6">Please enter your credentials</div>
        </q-card-section>
        <form class="q-pa-md" @submit.prevent="simulateSubmit">
          <div v-for="(item, index) in auth" :key="index">
            <q-card-section class="q-pt-none">
              <q-input
                v-model="item.model"
                dense
                autofocus
                :label="item.label"
                @keyup.enter="value.state = false"
              />
            </q-card-section>
          </div>
          <q-card-actions align="center" class="text-primary">
            <q-btn
              id="loginBtnDialog"
              color="orange"
              :label="value.message"
              type="submit"
              :loading="submitting"
              no-shadow
              rounded
            >
              <template #loading>
                <q-spinner-facebook />
              </template>
            </q-btn>
          </q-card-actions>
          <q-card-actions align="center" class="text-primary">
            <q-btn id="cancel" v-close-popup rounded flat label="Cancel" />
          </q-card-actions>
        </form>

        <q-card-actions align="center" class="no-padding q-mb-lg">
          <span>
            {{ value.alt }}
            <q-btn
              v-close-popup
              color="primary"
              flat
              :label="prompt[key == 'login' ? 'signup' : 'login'].message"
              @click="prompt[key == 'login' ? 'signup' : 'login'].state = true"
            />
          </span>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { QSpinnerGears } from "quasar";

//Props
const props = defineProps(["msg", "dark"]);
const prompt = ref(props.msg);
const dark = ref(false);
const auth = ref([
  { model: "", label: "Username" },
  { model: "", label: "Password" },
]);
// Login Spinner
const $q = useQuasar();
function loggingIn() {
  const dialog = $q.dialog({
    message: "Logging in...",
    progress: true, // we enable default settings
    persistent: true, // we want the user to not be able to close it
    ok: false, // we want the user to not be able to close it
  });

  // we simulate some progress here...
  let percentage = 0;
  const interval = setInterval(() => {
    percentage = Math.min(100, percentage + Math.floor(Math.random() * 22));

    // we update the dialog
    dialog.update({
      message: `Logging in... ${percentage}%`,
    });

    // if we are done, we're gonna close it
    if (percentage === 100) {
      clearInterval(interval);
      setTimeout(() => {
        dialog.hide();
      }, 350);
    }
  }, 500);
}

const submitting = ref(false);

function simulateSubmit() {
  submitting.value = true;
  // Simulating a delay here.
  // When we are done, we reset "submitting"
  // Boolean to false to restore the
  // initial state.
  setTimeout(() => {
    // delay simulated, we are done,
    // now restoring submit to its initial state
    submitting.value = false;
  }, 3000);
}
//Helper Functions
</script>

<style>
#loginBtnDialog,
#cancel {
  width: 100%;
  height: 50px;
}

#acc-img {
  width: 110px;
  margin-top: -80px;
}

.q-dialog__inner > div {
  overflow: visible;
  border-radius: 20px;
}

.q-dialog__inner--minimized > div {
  max-height: none !important;
}
</style>
