<template>
  <open-layers-map class="map">
    <ion-grid class="buttonMap">
      <ion-row class="height100pourcent">
        <ion-col style="background: red" class="height100pourcent minWidth100" >
          <div v-on:click="salut('à charger')" class="height100pourcent" style="background: white;width: 200px; position:relative;">
            <ion-icon name="close-circle-outline"></ion-icon>
            <div style="position:absolute; width: 20px; height: 20px; background: red;top:0px; right:0px;text-align: center; border-radius:10px "></div>
            <div style="position:absolute; width: 60px; height: 60px; background: red;top:5px; left:70px;"></div>
            <div style="position:absolute; right: 135px; font-size: 60px; bottom: 0px">5</div>
            <div style="position:absolute; left: 75px; width: 114px; font-size: 20px; bottom: 10px; font-weight: 600;">véhicules à charger</div>
          </div>
        </ion-col>
        <ion-col style="background: blue" class="height100pourcent minWidth100  ">
          <div v-on:click="salut('erreurs')" class="height100pourcent" style="background: white;width: 200px; position:relative;">
            <div style="position:absolute; width: 20px; height: 20px; background: red;top:0px; right:0px;text-align: center; border-radius:10px ">X</div>
            <div style="position:absolute; width: 60px; height: 60px; background: red;top:5px; left:70px;"></div>
            <div style="position:absolute; right: 135px; font-size: 60px; bottom: 0px">5</div>
            <div style="position:absolute; left: 75px; width: 114px; font-size: 20px; bottom: 10px; font-weight: 600;">erreurs identifiées</div>
          </div>

        </ion-col>
        <ion-col style="background: yellow" class="height100pourcent minWidth100 ">
          <div v-on:click="salut('en cours')" class="height100pourcent" style="background: white;width: 200px; position:relative;">
            <div style="position:absolute; width: 20px; height: 20px; background: red;top:0px; right:0px;text-align: center; border-radius:10px ">X</div>
            <div style="position:absolute; width: 60px; height: 60px; background: red;top:5px; left:70px;"></div>
            <div style="position:absolute; right: 135px; font-size: 60px; bottom: 0px">5</div>
            <div style="position:absolute; left: 75px; width: 114px; font-size: 20px; bottom: 10px; font-weight: 600;">chargement en cours</div>
          </div>
        </ion-col>
        <ion-col style="background: green" class="height100pourcent minWidth100 ">
          <div v-on:click="salut('chargé')" class="height100pourcent" style="background: white;width: 200px; position:relative;">
            <div style="position:absolute; width: 20px; height: 20px; background: red;top:0px; right:0px;text-align: center; border-radius:10px ">X</div>
            <div style="position:absolute; width: 60px; height: 60px; background: red;top:5px; left:70px;"></div>
            <div style="position:absolute; right: 135px; font-size: 60px; bottom: 0px">5</div>
            <div style="position:absolute; left: 75px; width: 114px; font-size: 20px; bottom: 10px; font-weight: 600;">véhicules chargés</div>
          </div>
        </ion-col>
      </ion-row>
    </ion-grid>

  </open-layers-map>
</template>



<script>
import OpenLayersMap from "@/components/map/OpenLayersMap";
import {defineComponent} from "vue";
import {IonGrid,IonRow,IonCol, IonIcon} from "@ionic/vue"

export default defineComponent({
  name:"DashBoardPage",
  methods:{
    salut(texte){
      console.log(texte)
    }
  }
  ,
  components: {
    OpenLayersMap,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
  }
})
</script>

<style scoped>
.buttonMap{
position: absolute;
top: 100px;
z-index: 2;
  width: 100%;
  height: 150px;
  background: white;
}
.map {
  min-height: 100px;
  height: 60%;
  width: 100%;
  position: relative;
}
.height100pourcent {
  height: 100%;
}
.minWidth100 {
  min-width: 200px;
  display: flex;
  justify-content: center;
}
</style>