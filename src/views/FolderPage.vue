<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
      </ion-toolbar>

      <ion-searchbar placeholder="Rechercher un boîtier, un véhicule..."></ion-searchbar>

    </ion-header>

    <ion-content :fullscreen="true">
      <ion-row>
        <btn-header v-for="filter in filters"
                    @btnSelect="handleChangeSelected"
                    :color="filter.color"
                    :value="filter.value"
                    :text="filter.text"
                    :icon="filter.icon"
                    :key="filter.key"></btn-header>
      </ion-row>

      <div id="container">
        <progress-bar :pourcent="progress" :text="`${Math.floor(this.progress * 100)}%`" :color="color"
                      :border-color="color"></progress-bar>
        <ion-button v-on:click="convertColorToClass" color="success">Vert</ion-button>
        <ion-button v-on:click="convertColorToClass" color="warning">Jaune</ion-button>
        <ion-button v-on:click="convertColorToClass" color="danger">Rouge</ion-button>

        <ion-button v-on:click="subProgression"> -</ion-button>
        <ion-button @click="addProgression"> +</ion-button>

        <strong class="capitalize">{{ $route.params.id }} {{ progress }}</strong>
{{state}}
<!--        <vehicule-list></vehicule-list>-->

      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonSearchbar,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonRow,
} from '@ionic/vue';
import ProgressBar from "@/components/progressBar.vue";
import BtnHeader from "@/components/btnHeader.vue";
import Charged from "../images/charged.svg";
import Charging from "../images/charging.svg";
import Error from "../images/errorToCharge.svg";
import ToCharge from "../images/toCharge.svg";

interface FilterButton {
  key: number,
  color: string,
  value: string,
  text: string,
  icon: string,
  state: string,
  enabled: boolean
}

const filters:Array<FilterButton> = [
  {
    key: 0,
    color: "#4A90E2",
    value: "5",
    text: "véhicules à charger",
    icon: ToCharge,
    state:"TOCHARGE",
    enabled: false,
  },
  {
    key: 1,
    color: "#D0021B",
    value: "4",
    text: "erreurs identifiées",
    icon: Error,
    state:"ERROR",
    enabled: false,
  },
  {
    key: 2,
    color: "#F5A623",
    value: "3",
    text: "chargements en cours",
    icon: Charging,
    state:"CHARGING",
    enabled: false,
  },
  {
    key: 3,
    color: "#589318",
    value: "6",
    text: "véhicules chargés",
    icon: Charged,
    state:"CHARGED",
    enabled: false,
  },
]

interface Vehicule {
  image: string,
  number: number,
  name: string,
  location: string,
  bat_number: number,
  state: string,
  pourcent?: number
}

const listeAFiltrer: Array<Vehicule> = [
  {
    image: '../images/image1',
    number: 69111359,
    name: "BUFFALO",
    location: "BAT512",
    bat_number: 5701159,
    state: "CHARGED",
    pourcent: 100
  },
  {
    image: '../images/image2',
    number: 69111959,
    name: "BUFFALO",
    location: "BAT512",
    bat_number: 5701559,
    state: "CHARGING",
    pourcent: 5,
  },
  {
    image: '../images/image1',
    number: 69111359,
    name: "BUFFALO",
    location: "BAT512",
    bat_number: 5701159,
    state: "TOCHARGE",
    pourcent: 20,
  },
  {
    image: '../images/image1',
    number: 69111359,
    name: "BUFFALO",
    location: "BAT512",
    bat_number: 5701159,
    state: "ERROR",
    pourcent: undefined,
  },
  {
    image: '../images/image1',
    number: 69111359,
    name: "BUFFALO",
    location: "BAT512",
    bat_number: 5701159,
    state: "CHARGED",
    pourcent: 100,
  },
  {
    image: '../images/image1',
    number: 69111359,
    name: "BUFFALO",
    location: "BAT512",
    bat_number: 5701159,
    state: "ERROR",
    pourcent: undefined,
  },
  {
    image: '../images/image2',
    number: 69111959,
    name: "BUFFALO",
    location: "BAT512",
    bat_number: 5701559,
    state: "CHARGING",
    pourcent: 5,
  },
  {
    image: '../images/image1',
    number: 69111359,
    name: "BUFFALO",
    location: "BAT512",
    bat_number: 5701159,
    state: "TOCHARGE",
    pourcent: 20,
  }
]

export default defineComponent({
  name: 'FolderPage',
  data() {
    return {
      filters,
      mapShown: true,
      listeAFiltrer,
      progress: 0.2,
      color: "warning",
    }
  },
  mounted() {
    console.log("Foldermounted");
  },
  methods: {
    addProgression: function () {
      this.progress += 0.1;
    },
    subProgression: function () {
      this.progress -= 0.1;
    },
    convertColorToClass: function (btn: any) {
      this.color = btn.target.color
    },
    handleChangeSelected: function (idBtn: number, selected: boolean) {
      this.filters[this.filters.findIndex(s => s.key === idBtn)].enabled = selected
    },
  },
  watch: {
    $route(newRoute) {
      console.log(newRoute.path.indexOf('Dashboard') !== -1)

      this.mapShown = newRoute.path.indexOf('Dashboard') !== -1
    },
    mapShown(newShown) {
      console.log('shown', newShown)
    },
    filters:{
      handler: function (val){
        console.log(val.filter((s:any) => s.enabled))
      },
      deep:true,
    },
  },
  components: {
    BtnHeader,
    IonSearchbar,
    ProgressBar,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonRow,
  }
});
</script>

<style scoped>

#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
