const URL = "http://localhost:8090/persona";

export default {
  namespaced: true,
  state: {
    personas: [],
    persona: {
      id: null,
      nombre: null,
      apellidos: null,
    },
    id: null,
  },
  /*getters: {
    personas(state) {
      return state.personas;
    },
    persona(state) {
      return state.persona;
    },
  },*/
  mutations: {
    setPersonas(state, personas) {
      state.personas = personas;
    },
    setId(state, id) {
      state.id = id;
    },
    setLimpiar(state) {
      state.persona.apellidos = null;
      state.persona.id = null;
      state.persona.nombre = null;
    },
    setPersona(state, data) {
      state.persona.id = data.id;
      state.persona.nombre = data.nombre;
      state.persona.apellidos = data.apellidos;
    },
  },
  actions: {
    //Optener todos los registros
    getAll(state) {
      fetch(URL + "/all")
        .then((res) => res.json())
        .then((data) => {
          state.commit("setPersonas", data);
        })
        .catch((err) => console.log(err.message));
    },
    //Optener un registro en espesífico
    getPersona(state, idPersona) {
      fetch(URL + "/" + idPersona)
        .then((res) => res.json())
        .then((data) => state.commit("setPersona", data))
        .catch((err) => console.log(err.message));
    },
  },
  modules: {},
};
