<template>
  <ion-col class="filter-col">
    <div class="filter-btn" v-on:click="filter" :style="`background: ${selected?`linear-gradient(180deg, ${color}AA, ${color})`:'white'};`">
      <ion-row class="ion-justify-content-center filter-icon-row">
        <ion-icon :icon="icon" class="filter-icon-large" :style="`color:${selected?'white':color};` "></ion-icon>
      </ion-row>
      <ion-row class="ion-align-items-center" :style="`color: ${selected?'white':textColor}`">
        <ion-col size="4" class="ion-text-end filter-number">
          {{value}}
        </ion-col>
        <ion-col size="7" class="ion-text-start filter-text">
         {{text}}
        </ion-col>
      </ion-row>
      <div class="filter-close-btn" :style="`visibility: ${selected?'visible':'hidden'};`">
        <ion-icon :icon="closeSharp" style="font-size: 20px; color: white"></ion-icon>
      </div>
    </div>
  </ion-col>
</template>

<script>
import {IonIcon, IonRow,IonCol} from "@ionic/vue";
import {
  closeSharp,
} from 'ionicons/icons';

export default {
  name: "btnHeader",
  components: {
    IonIcon,
    IonRow,
    IonCol,
  },
  methods: {
    filter: function () {
      this.selected = !this.selected
    }
  },
  props:{
    color: {
      type:String,
      default:'#F5A623',
    },
    icon: String,
    text: {
      type:String,
      default:"texte à afficher",
    },
    value: {
      type: String,
      default: "Nb"
    }
  },
  data() {
    return {
      selected: false,
      textColor: '#4A4A4A',
    }
  },
  setup() {
    return {
      closeSharp,
    }
  }
}
</script>

<style scoped>

.filter-col {
  display: flex;
  justify-content: center;
}

.filter-btn {
  margin-top:10px;
  width: 167px;
  height:124px;
  box-shadow: -10px 10px 20px rgb(30,30,30,0.05);
  position: relative;
}
.filter-icon-row {
  height: 55%;
  padding-top: 10px;
}
.filter-icon-large{
  font-size: 55px;
}
.filter-number{
  font-size: 32px;
  font-weight: 700;
}
.filter-text {
  font-size: 12px;
  font-weight: 700;
}
.filter-close-btn{
  background-color: v-bind(color);
  width: 26px;
  height: 26px;
  border-radius: 13px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: -4px;
  top: -3px;
}

</style>