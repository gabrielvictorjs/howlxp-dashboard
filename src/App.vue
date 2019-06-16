<template>
  <v-app>
    <!-- appbar -->
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <img class="mt-2" width="150" src="./assets/hampybann.png" alt="logomarca">
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn color="primary" flat to="/">Dashboard</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- content -->
    <v-content style="background-color: #f1f1f1">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions(["getStoreName"])
  },

  mounted() {
    this.getStoreName();
  }
};
</script>




