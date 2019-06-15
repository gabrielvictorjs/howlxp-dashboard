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
    <v-card-text>Traffic Chart</v-card-text>
  </v-card>
</template>
