const URL = "https://api-spring-postgresql.herokuapp.com/carrera";

export default {
  namespaced: true,
  state: {
    carreras: [],
    carrera: {
      id: null,
      nombre: null,
      creditos: null,
    },
    carreraS: {
      nombre: null,
      creditos: null,
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
    setCarreras(state, data) {
      state.carreras = data;
    },
    setId(state, id) {
      state.id = id;
    },
    setLimpiar(state) {
      state.carrera.id = null;
      state.carrera.nombre = null;
      state.carrera.creditos = null;
      state.carreraS.nombre = null;
      state.carreraS.creditos = null;
    },
    setCarrera(state, data) {
      state.carrera.id = data.id;
      state.carrera.nombre = data.nombre;
      state.carrera.creditos = data.creditos;
    },
    setCarreraS(state, data) {
      state.carreraS.nombre = data.nombre;
      state.carreraS.creditos = data.creditos;
    },
  },
  actions: {
    //Optener todos los registros
    getAll(state) {
      fetch(URL + "/all")
        .then((res) => res.json())
        .then((data) => {
          state.commit("setCarreras", data);
        })
        .catch((err) => console.log(err.message));
    },
    //Optener un registro en espesífico
    getCarrera(state, idCarrera) {
      fetch(URL + "/" + idCarrera)
        .then((res) => res.json())
        .then((data) => state.commit("setCarrera", data))
        .catch((err) => console.log(err.message));
    },
  },
  modules: {},
};
