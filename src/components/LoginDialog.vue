<!-- eslint-disable vue/require-prop-types -->
<template>
  <div v-for="(value, key) in prompt" :key="key" :class="{ dark: dark }">
    <q-dialog
      v-model="value.state"
      transition-show="fade"
      transition-hide="fade"
      align="center"
    >
      <q-card style="min-width: 350px" :class="{ 'bg-black': dark }">
        <q-card-section>
          <q-img
            id="acc-img"
            src="img/account-icon.png"
            spinner-color="primary"
            spinner-size="82px"
          />
        </q-card-section>
        <q-card-section>
          <div class="text-h6">Please enter your credentials</div>
        </q-card-section>
        <form class="q-pa-md" @submit.prevent="sign(value.type)">
          <div v-for="(item, index) in auth" :key="index">
            <q-card-section class="q-pt-none">
              <q-input
                v-model="item.model"
                dense
                autofocus
                :type="item.type"
                :label="item.label"
                @keyup.enter="value.state = false"
              />
            </q-card-section>
          </div>
          <q-card-actions align="center" class="text-primary">
            <q-btn
              id="loginBtnDialog"
              color="primary"
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
          <span class="text-red-600">{{ error }}</span>
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
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import AuthenticationService from "src/services/AuthenticationService";
import { useUsersStore } from "stores/store";

//Refs
const store = useUsersStore(),
  router = useRouter(),
  route = useRoute(),
  props = defineProps(["msg", "dark"]),
  error = ref(null),
  prompt = ref(props.msg),
  dark = ref(false),
  auth = ref([
    { model: "", label: "Username", type: "null" },
    { model: "", label: "Password", type: "password" }
  ]),
  submitting = ref(false),
  setSubmit = () => {
    submitting.value = false;
  },
  sign = async (type) => {
    try {
      submitting.value = true;
      error.value = "";
      const response = await AuthenticationService[type]({
        username: auth.value[0].model,
        password: auth.value[1].model
      });
      store.setToken(response.data.token);
      store.setUser(response.data.user);
      setSubmit();
      router.push({ name: "home" });
      prompt.value.signup.state = false;
      prompt.value.login.state = false;
    } catch (err) {
      try {
        error.value = err.data.error;
      } catch {
        error.value = err;
      }

      // console.log(err);
      submitting.value = false;
    }
  };
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
