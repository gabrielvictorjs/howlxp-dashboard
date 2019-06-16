<template>
  <v-container grid-list-xl>
    <h2 class="display-1 primary--text text-uppercase font-weight-black"></h2>
    <v-layout row wrap>
      <v-flex lg3>
        <m-filter/>
      </v-flex>
      <v-flex lg6>
        <m-heat-map/>
      </v-flex>

      <v-flex lg3>
        <m-traffic/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MHeatMap from "../components/HeatMap";
import MTraffic from "../components/Traffic";
import MFilter from "../components/Filter";
export default {
  components: {
    MHeatMap,
    MTraffic,
    MFilter
  }
};
</script>
