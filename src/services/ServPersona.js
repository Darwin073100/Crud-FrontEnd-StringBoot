export default class ServPersona {
  URL = "http://localhost:8090/persona";

  //Optener todos los registros
  getAll() {
    return fetch(this.URL + "/all");
  }

  //Optener un registro en espesífico
  getPersona(idPersona) {
    return fetch(this.URL+'/'+idPersona);
  }

  //Guardar un registro
  save(persona) {
    return fetch(this.URL + "/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(persona),
    });
  }

  //Actualizar un registro dado
  upDate(idPersona, persona) {
    return fetch(this.URL + "/update/" + idPersona, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(persona),
    });
  }

  //Eliminar un registro
  delete(idPersona) {
    return fetch(this.URL + "/delete/" + idPersona, {
      method: "DELETE"
    });
  }
}
