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
      <e-bar :chart-data="dataCollection" :options="options"></e-bar>
    </v-card-text>
  </v-card>
</template>

<script>
import EBar from "../components/charts/Bar";
import API from "../services/API";
export default {
  components: {
    EBar
  },
  data() {
    return {
      dataCollection: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        datasets: [
          {
            label: "Quantidades de pessoas",
            backgroundColor: "#12C546",
            data:
              [20, 25, 32, 45, 65, 15, 25, 32, 25, 32, 45, 95, 13] ||
              API.finalData
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },

  mounted() {
    API.monthVisitData();
  }
};
</script>

