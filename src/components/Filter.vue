<template>
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
              :items="items"
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
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["storeNames", "dates"])
  },
  data: () => ({
    storeNameSelected: null,
    cicleSelected: null,
    date: new Date().toISOString().substr(0, 10),
    modal: false,
    items: ["ciclo1", "ciclo2"]
  }),
  methods: {
    ...mapActions(["getDates", "getCicles", "getData"]),
    filter() {
      if (this.cicleSelected && this.storeNameSelected) {
        this.getData({
          nameStore: this.storeNameSelected,
          cicle: this.cicleSelected,
          date: this.dates[0]
        });
        console.log(this.storeNameSelected, this.cicleSelected, this.dates[0]);
      }
    }
  },
  updated() {
    if (this.storeNameSelected) this.getDates(this.storeNameSelected);
  }
};
</script>

