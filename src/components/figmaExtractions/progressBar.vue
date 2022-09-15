<template>
  <div class="progress-bar-container">
    <div class="progress-bar-contour">
      <ion-progress-bar :value="pourcent" :color="color" class="progress-bar-content"></ion-progress-bar>
    </div>
    <div :class="color">{{ text }}</div>
    <div class="progress" style="transform: scaleX(0.4);"></div>

  </div>
</template>

<script>
import {IonProgressBar} from "@ionic/vue";
import {defineComponent} from "vue";

export default {

  name: "progressBar",
  props: {
    pourcent: Number,
    text: String,
    color: String,
  },
  components: {
    IonProgressBar
  }
}
</script>

<style scoped>

.progress-bar-container {
  width: 112px;
  text-align: center;
}

.progress-bar-contour {
  width: 112px;
  height: 18px;
  box-sizing: border-box;
  border: 1px solid #C9C7C7;
  border-radius: 9px;
}

.progress-bar-content {
  height: 10px;
  max-width: 102px;
  border-radius: 5px;
  position: absolute;
  left: 5px;
  top: 4px;
}

.success {
  color: var(--ion-color-success);
}

.warning {
  color: var(--ion-color-warning);
}

.danger {
  color: var(--ion-color-danger);
}

</style>