<template>
  <q-dialog v-model="showEventDialog.state">
    <q-card>
      <q-card-section class="items-center row">
        <q-avatar rounded size="48px">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
        <q-card-section>
          Mary the Organizer
          <q-badge color="transparent"> Organizer </q-badge>
        </q-card-section>
        <span class="q-ml-sm"
          >You are currently not connected to any network.</span
        >
      </q-card-section>
      <q-card-actions align="right">
        <q-btn v-close-popup flat label="Cancel" color="primary" />
        <q-btn v-close-popup flat label="Turn on Wifi" color="primary" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps(["showEventDialog"]);
const showEventDialog = ref(props.showEventDialog);
</script>
