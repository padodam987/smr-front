<template>
<div class="progress-bar-container">
  <div class="progress-bar-contour">
    <div class="progress-bar-content"></div>
  </div>
  <div class="progress-bar-text">{{text}}</div>
</div>
</template>

<script>
export default {
  name: "progressBar",
  props:{
      pourcent : Number,
      text: String,
      color: String,
  }
}
</script>

<style scoped>

  .progress-bar-container{
    width: 112px;
    text-align: center;
  }
  .progress-bar-contour{
    width: 112px;
    height: 18px;
    box-sizing: border-box;
    border: 1px solid #C9C7C7;
    border-radius: 9px;
  /*position: relative;*/
  }
  .progress-bar-content{
    height: 10px;
    width: calc(102px * v-bind(pourcent));
    max-width: 102px;
    border-radius: 5px;
    background-color: v-bind(color);
    position: absolute;
    left: 5px;
    top: 4px;

  }
  .progress-bar-text{
    color: v-bind(color);
  }
</style>