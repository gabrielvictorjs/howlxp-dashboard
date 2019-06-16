<template>
  <v-card>
    <v-toolbar color="transparent" flat dense card>
      <v-toolbar-title>
        <h4>Mapa de Calor</h4>
      </v-toolbar-title>
      <v-spacer/>
    </v-toolbar>

    <v-divider/>
    <v-card-text>
      <v-img :src="data.img"></v-img>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["data"])
  }
};
</script>

