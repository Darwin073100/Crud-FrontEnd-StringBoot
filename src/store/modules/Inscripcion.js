const URL = "https://api-spring-postgresql.herokuapp.com/inscripcion";

export default {
  namespaced: true,
  state: {
    inscripciones: [],
    inscripcion: {
      id: null,
      idPersona: null,
      idCarrera: null,
      fecha: null,
    },
    inscripcionS: {
      idPersona: null,
      idCarrera: null,
      fecha: null,
    },
    id: null,
  },
  getters: {
    inscripciones(state) {
      return state.inscripciones;
    },
    inscripcion(state) {
      return state.inscripcion;
    },
  },
  mutations: {
    setInscripciones(state, data) {
      state.inscripciones = data;
    },
    setId(state, id) {
      state.id = id;
    },
    setLimpiar(state) {
      state.inscripcion.id = null;
      state.inscripcion.idPersona = null;
      state.inscripcion.idCarrera = null;
      state.inscripcion.fecha = null;
      state.inscripcionS.idPersona = null;
      state.inscripcionS.idCarrera = null;
      state.inscripcionS.fecha = null;
    },
    setInscripcion(state, data) {
      state.inscripcion.id = data.id;
      state.inscripcion.idPersona = data.idPersona;
      state.inscripcion.idCarrera = data.idCarrera;
      state.inscripcion.fecha = data.fecha;
    },
    setInscripcionS(state, data) {
      state.inscripcion.idPersona = data.idPersona;
      state.inscripcion.idCarrera = data.idCarrera;
      state.inscripcion.fecha = data.fecha;
    },
  },
  actions: {
    //Optener todos los registros
    getAll(state) {
      fetch(URL + "/all")
        .then((res) => res.json())
        .then((data) => {
          state.commit("setInscripciones", data);
        })
        .catch((err) => console.log(err.message));
    },
    //Optener un registro en espesífico
    getInscripcion(state, idInscripcion) {
      fetch(URL + "/" + idInscripcion)
        .then((res) => res.json())
        .then((data) => state.commit("setInscripcion", data))
        .catch((err) => console.log(err.message));
    },
  },
  modules: {},
};
