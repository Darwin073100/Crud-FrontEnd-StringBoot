import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const URL_PERSONA = "http://localhost:8090/persona";
export default new Vuex.Store({
  state: {
    activeS: false,
    activeE: false,
    personas: [],
  },
  getters: {
    personas(state) {
      return state.personas;
    },
  },
  mutations: {
    setPersonas(state, personas) {
      state.personas = personas;
    },
    upGetConvert(state) {
      if (state.upGet == true) {
        state.upGet = false;
      } else {
        state.upGet = true;
      }
    },
    convertS(state, status) {
      state.status = status;
      state.activeS = true;
    },
    convertE(state, status) {
      state.status = status;
      state.activeE = true;
    },

    convertRESET(state) {
      state.activeE = false;
      state.activeS = false;
    },
  },
  actions: {
    getAllPer(state) {
      fetch(URL_PERSONA + "/all")
        .then((res) => res.json())
        .then((data) => {
          state.commit("setPersonas", data);
        })
        .catch((err) => console.log(err.message));
    },
  },
  modules: {},
});
