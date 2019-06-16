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

            <v-overflow-btn :items="dropdown_font" label="Loja" target="#dropdown-example"></v-overflow-btn>
          </v-flex>

          <v-flex xs12 sm4>
            <p class="font-weight-bold subtitle text-uppercase">Data</p>

            <v-layout align-center column>
              <div>
                <v-date-picker v-model="picker" :landscape="landscape" :reactive="reactive"></v-date-picker>
              </div>
            </v-layout>
          </v-flex>

          <v-flex mt-2 xs12 sm4>
            <p class="font-weight-bold subtitle text-uppercase">Horario</p>

            <v-overflow-btn :items="horas" label="Horario" editable item-value="text"></v-overflow-btn>
          </v-flex>
          <v-btn color="primary">Filtrar</v-btn>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    dropdown_font: ["Loja1", "Loja2", "Loja3", "Loja4"],
    dropdown_icon: [
      { text: "list", callback: () => console.log("list") },
      { text: "favorite", callback: () => console.log("favorite") },
      { text: "delete", callback: () => console.log("delete") }
    ],
    horas: [
      { text: "Seção 1" },
      { text: "Seção 2" },
      { text: "Seção 3" },
      { text: "Seção 4" },
      { text: "Dia inteiro" },
      { text: "Mês selecionado" }
    ],
    data() {
      return {
        picker: new Date().toISOString().substr(0, 10),
        landscape: false,
        reactive: false
      };
    }
  })
};
</script>

