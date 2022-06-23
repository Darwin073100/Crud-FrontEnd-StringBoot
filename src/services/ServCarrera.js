export default class ServCarrera {
  URL = "https://api-spring-postgresql.herokuapp.com/carrera";

  //Optener todos los registros
  getAll() {
    return fetch(this.URL + "/all");
  }

  //Optener un registro en espesífico
  getPersona(idCarrera) {
    return fetch(`${this.URL}/${idCarrera}`);
  }

  //Guardar un registro
  save(carrera) {
    return fetch(this.URL + "/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carrera),
    });
  }

  //Actualizar un registro dado
  upDate(idCarrera, carrera) {
    return fetch(this.URL + "/update/" + idCarrera, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carrera),
    });
  }

  //Eliminar un registro
  delete(idCarrera) {
    return fetch(this.URL + "/delete/" + idCarrera, {
      method: "DELETE",
    });
  }
}
