import Vue from "vue";
import Vuex from "vuex";
import Persona from "./modules/Persona";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    activeS: false,
    activeE: false,
  },
  mutations: {
    upGetConvert(state) {
      if (state.upGet == true) {
        state.upGet = false;
      } else {
        state.upGet = true;
      }
    },
    convertS(state) {
      state.activeS = true;
    },
    convertE(state) {
      state.activeE = true;
    },

    convertRESET(state) {
      state.activeE = false;
      state.activeS = false;
    },
  },
  actions: {},
  modules: {
    Persona,
  },
});
