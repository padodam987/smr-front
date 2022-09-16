<template>
<div class="btn-header-container">

  <ion-button>Test
  <ion-icon :icon="Charged" style="font-size: 50px; color: #589318 "></ion-icon>

  </ion-button>


</div>
</template>

<script>
import {IonButton, IonIcon} from "@ionic/vue";
import Charged from "../../images/charged.svg"

export default {
  name: "btnHeader",

  components: {
    IonButton,
    IonIcon,


  },
  data()  {
    return {
      Charged
    }
  }

}

</script>

<style scoped>

</style>