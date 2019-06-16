<template>
  <v-card>
    <v-toolbar color="transparent" flat dense card>
      <v-toolbar-title>
        <h4>Tráfego</h4>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <slot name="widget-header-action"></slot>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text>
      <e-bar :chartdata="chartdata" :options="options"></e-bar>
    </v-card-text>
  </v-card>
</template>

<script>
import EBar from "../components/charts/Bar";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    EBar
  },
  data() {
    return {
      loaded: false,
      chartdata: {
        labels: [
          "8-9",
          "9-10",
          "10-11",
          "11-12",
          "12-13",
          "13-14",
          "14-15",
          "15-16",
          "16-17",
          "17-18",
          "18-19",
          "19-20",
          "21-22"
        ],
        datasets: [
          {
            label: "Quantidades de pessoas",
            backgroundColor: "#993399",
            data: [
              600,
              850,
              1560,
              1005,
              980,
              1600,
              1350,
              988,
              2000,
              870,
              650,
              400,
              0
            ]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  }
};
</script>

