<template>
  <v-app>
    <!-- appbar -->
    <v-toolbar app dark color="light-blue darken-4">
      <v-toolbar-title class="headline text-uppercase">
        <span class="orange--text">EASY</span>
        <span class="font-weight-light">MATEUS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat to="/">
          <span class="mr-2">Home</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- content -->
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>
