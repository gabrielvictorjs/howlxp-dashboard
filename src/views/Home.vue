<template>
  <v-container grid-list-xl>
    <h2 class="display-1">Dashboard</h2>
    <v-layout row wrap>
      <v-flex lg8>
        <m-heat-map/>
      </v-flex>

      <v-flex lg4>
        <m-traffic/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MHeatMap from "../components/HeatMap";
import MTraffic from "../components/Traffic";
export default {
  components: {
    MHeatMap,
    MTraffic
  }
};
</script>
