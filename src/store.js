import Vue from "vue";
import Vuex from "vuex";
import { database } from "./services/firebase";

Vue.use(Vuex);

const dbRef = database.ref("easymateus/dataVC");

export default new Vuex.Store({
  state: {
    data: {},
    storeNames: [],
    dates: [],
    cicles: [],
    peoples: []
  },

  actions: {
    getData({ commit }, fam) {
      dbRef
        .child(`${fam.nameStore}/${fam.date}/${fam.id}`)
        .on("value", snap => {
          let dataIn = snap.val();
          commit("SET_DATA", { dataIn });
        });
    },

    getQuantityPeople({ commit }) {
      dbRef.child("Loja1/20190616").on("value", snap => {
        for (let key in snap.val())
          commit("SET_QUANTITY_PEOPLE", { key: snap.val()[key].qtdpessoas });
      });
    },

    getStoreName({ commit }) {
      dbRef.on("value", snap => {
        for (let key in snap.val()) commit("SET_STORE_NAME", { key });
      });
    },

    getDates({ commit }, storeName) {
      dbRef.child(storeName).on("value", snap => {
        for (let key in snap.val()) commit("SET_DATES", { key });
      });
    },

    getCicles({ commit }, fam) {
      dbRef.child(`${fam.storeName}/${fam.date}`).on("value", snap => {
        for (let key in snap.val())
          commit("SET_CICLES", { key: snap.val()[key].id });
      });
    }
  },

  mutations: {
    SET_DATA(state, payload) {
      state.data = payload.dataIn;
    },
    SET_STORE_NAME(state, payload) {
      state.storeNames.push(payload.key);
    },
    SET_CICLES(state, payload) {
      state.cicles.push(payload.key);
    },
    SET_DATES(state, payload) {
      state.dates.push(payload.key);
    },
    SET_QUANTITY_PEOPLE(state, payload) {
      state.peoples.push(payload.key);
    }
  },
  getters: {
    dataCollection: state => {
      return {
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
          "17-18"
        ],
        datasets: [
          {
            label: "Quantidades de pessoas",
            backgroundColor: "#993399",
            data: state.peoples
          }
        ]
      };
    }
  }
});
