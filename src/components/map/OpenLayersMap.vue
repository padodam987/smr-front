<template>
  <div id="map" class="map">
    <slot></slot>
  </div>

</template>

<script>
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { useGeographic } from "ol/proj";
import {FullScreen, defaults  as defaultControls} from "ol/control";
import Point from "ol/geom/Point";
import Feature from "ol/Feature";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import {defineComponent} from "vue";


export default defineComponent({
  name: "OpenLayerMap",
  data() {
    return {
      mainMap: null,
      initialCoordinates: [-47, -15],
      initialZoom: 12,
    };
  },
  mounted() {
      useGeographic();
      this.mainMap = new Map({
        controls: defaultControls().extend([new FullScreen()]),
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          new VectorLayer({
            source: new VectorSource({
              features: [new Feature(new Point(this.initialCoordinates))],
            }),
          }),
        ],
        target: "map",
        view: new View({
          center: this.initialCoordinates,
          zoom: this.initialZoom,
        }),
      });
      setTimeout(() => {
        this.mainMap.updateSize();
      }, 500);
    },
});
</script>
