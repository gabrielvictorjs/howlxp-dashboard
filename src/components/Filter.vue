<template>
  <div>
    <v-card>
      <v-toolbar color="transparent" flat dense card>
        <v-toolbar-title>
          <h4>Filtros</h4>
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text>
        <v-container id="dropdown-example" grid-list-xl>
          <v-layout column>
            <v-flex xs12 sm4>
              <p class="font-weight-bold subtitle text-uppercase">Loja</p>

              <v-overflow-btn
                v-model="storeNameSelected"
                :items="storeNames"
                label="Loja"
                target="#dropdown-example"
              ></v-overflow-btn>
            </v-flex>

            <v-flex xs12 sm4>
              <p class="font-weight-bold subtitle text-uppercase">Data</p>

              <v-layout align-center column>
                <div>
                  <v-dialog
                    ref="dialog"
                    v-model="modal"
                    :return-value.sync="date"
                    persistent
                    lazy
                    full-width
                    width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field v-model="date" readonly v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="date" scrollable>
                      <v-spacer></v-spacer>
                      <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                      <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                    </v-date-picker>
                  </v-dialog>
                </div>
              </v-layout>
            </v-flex>

            <v-flex mt-2 xs12 sm4>
              <p class="font-weight-bold subtitle text-uppercase">Horario</p>

              <v-overflow-btn
                v-model="cicleSelected"
                :items="cicles"
                label="Horario"
                editable
                item-value="text"
              ></v-overflow-btn>
            </v-flex>
            <v-btn @click.prevent="filter" color="primary">Filtrar</v-btn>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>

    <v-card class="mt-4">
      <v-toolbar color="transparent" flat dense card>
        <v-toolbar-title>
          <h4>Pesquisa</h4>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <slot name="widget-header-action"></slot>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text v-if="loaded && data">
        <v-layout class="mx-2 my-2" row>
          <p class="subheading">
            <span class="font-weight-bold">Loja:</span>
            {{ storeNameSelected }}
          </p>
          <p class="subheading ml-2">
            <span class="font-weight-bold">Data:</span>
            16/06/2019
          </p>
        </v-layout>
        <p class="ml-2 headline font-weight-black primary--text">{{ data.qtdpessoas }} PESSOAS</p>
      </v-card-text>
      <v-card-text v-else>
        <p class="title">Faça uma busca!</p>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["storeNames", "dates", "cicles", "data"])
  },
  data: () => ({
    storeNameSelected: null,
    cicleSelected: null,
    loaded: false,
    date: new Date().toISOString().substr(0, 10),
    modal: false
  }),
  methods: {
    ...mapActions(["getDates", "getCicles", "getData"]),
    filter() {
      this.loaded = false;
      if (this.cicleSelected && this.storeNameSelected) {
        this.getData({
          nameStore: this.storeNameSelected,
          id: this.cicles.indexOf(this.cicleSelected),
          date: this.dates[0]
        });
        this.loaded = true;
      }
    }
  },
  updated() {
    if (this.storeNameSelected) {
      this.getDates(this.storeNameSelected);
      console.log("acabou", this.storeNameSelected, this.dates[0]);
    }
  },
  mounted() {
    this.getCicles({ storeName: "Loja1", date: "20190616" });
  }
};
</script>

