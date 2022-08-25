<template>
  <ion-app>
    <main-page/>
  </ion-app>
</template>

<script lang="ts">
import { IonApp } from "@ionic/vue";
import MainPage from "@/views/MainPage.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    MainPage
  },
});
</script>

