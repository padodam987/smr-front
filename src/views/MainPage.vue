<template>
    <ion-split-pane content-id="main-content">
      <menu-smr></menu-smr>
      <ion-page id="main-content">
        <ion-header :translucent="true">
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-menu-button color="primary"></ion-menu-button>
            </ion-buttons>
            <ion-title>{{ $route.name }}</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <ion-router-outlet></ion-router-outlet>
        </ion-content>
      </ion-page>

    </ion-split-pane>
</template>

<script lang="ts">

import {
  IonButtons, IonContent, IonHeader, IonMenuButton, IonPage,
  IonRouterOutlet,
  IonSplitPane, IonTitle, IonToolbar,
} from "@ionic/vue";
import MenuSmr from "@/components/menu/MenuSmr.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainPage",
    components: {
    IonRouterOutlet,
    IonSplitPane,
    MenuSmr,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
  },
});
</script>