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
    cicles: []
  },

  actions: {
    getData({ commit }, fam) {
      dbRef
        .child(`${fam.nameStore}/${fam.date}/${fam.cicle}`)
        .on("value", snap => {
          let dataIn = snap.val();
          console.log(`${fam.nameStore}/${fam.date}/${fam.cicle}`, snap.val());
          commit("SET_DATA", { dataIn });
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
        for (let key in snap.val()) commit("SET_CICLES", { key });
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
    }
  }
});
