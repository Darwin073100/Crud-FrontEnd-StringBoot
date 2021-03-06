export default class ServInscripcion {
  URL = "https://api-spring-postgresql.herokuapp.com/inscripcion";

  //Optener todos los registros
  getAll() {
    return fetch(this.URL + "/all");
  }

  //Optener un registro en espesífico
  getPersona(idInscripcion) {
    return fetch(`${this.URL}/${idInscripcion}`);
  }

  //Guardar un registro
  save(inscripcion) {
    return fetch(this.URL + "/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inscripcion),
    });
  }

  //Actualizar un registro dado
  upDate(idInscripcion, inscripcion) {
    return fetch(this.URL + "/update/" + idInscripcion, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inscripcion),
    });
  }

  //Eliminar un registro
  delete(idInscripcion) {
    return fetch(this.URL + "/delete/" + idInscripcion, {
      method: "DELETE",
    });
  }
}
