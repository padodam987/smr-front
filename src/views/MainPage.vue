<template>
    <ion-split-pane content-id="main-content">
      <menu-smr></menu-smr>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
</template>

<script lang="ts">

import {
  IonRouterOutlet,
  IonSplitPane,
} from "@ionic/vue";
import MenuSmr from "@/components/menu/MenuSmr.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainPage",
    components: {
    IonRouterOutlet,
    IonSplitPane,
    MenuSmr
  },
});
</script>