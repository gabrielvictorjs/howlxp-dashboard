<template>
  <v-app>
    <!-- appbar -->
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <img class="mt-2" width="100" src="./assets/mateus.png" alt="logomarca">
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat to="/">Home</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- content -->
    <v-content style="background-color: #0091EA">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>
