<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">

      <div id="container">
        <progress-bar pourcent="1" text="100%" color="green"></progress-bar>
        <ion-button> - </ion-button>
        <ion-button> + </ion-button>
        <strong class="capitalize">{{ $route.params.id }} {{mapShown}}</strong>
        <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import OpenLayersMap from '../components/map/OpenLayersMap.vue';
import ProgressBar from "@/components/figmaExtractions/progressBar.vue";

export default defineComponent({
  name: 'FolderPage',
  data(){
    return{
      mapShown: true,
    }
  },
  mounted(){
    console.log("Foldermounted");
  },
  watch:{
    $route(newRoute){
      console.log(newRoute.path.indexOf('Dashboard')!== -1)

      this.mapShown =  newRoute.path.indexOf('Dashboard')!== -1
    },
    mapShown(newShown){
      console.log('shown', newShown)
    }
  },
  components: {
    ProgressBar,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton
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
