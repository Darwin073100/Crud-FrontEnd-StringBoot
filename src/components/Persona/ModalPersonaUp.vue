<template>
  <div>
    <!-- Modal Actualizar -->
    <div
      class="modal fade"
      id="staticBackdropUP"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="staticBackdropLabel">
              Formulario UpDate
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="limpiar()"
            ></button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="txtId">Id:</label>
              <label id="txtId" class="bg-muted form-control">{{ idP }}</label>
              <label for="txtNombre">Nombre:</label>
              <input
                class="form-control"
                type="text"
                id="txtNombre"
                v-model="persona.nombre"
              />

              <label for="txtApellidos">Apellidos:</label>
              <input
                class="form-control"
                type="text"
                id="txtApellidos"
                v-model="persona.apellidos"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="limpiar()"
            >
              Salir
            </button>
            <button class="btn btn-success" @click="llenar()">
              Rellenar Campos
            </button>
            <button
              class="btn btn-primary"
              v-on:click="upDate(persona.id, persona), limpiar()"
              data-bs-dismiss="modal"
            >
              Actualizar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServPersona from "@/services/ServPersona";
export default {
  name: "PxModalPersonaUp",
  data() {
    return {
      persona: {
        id: null,
        nombre: null,
        apellidos: null,
      },
    };
  },
  dbPersona: null,

  created() {
    this.dbPersona = new ServPersona();
  },

  methods: {
    upDate(id, persona) {
      this.dbPersona
        .upDate(id, persona)
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },

    propsId() {
      this.persona.id = this.idP;
    },

    llenar() {
      this.dbPersona
        .getPersona(this.idP)
        .then((res) => res.json())
        .then(
          (data) => (
            (this.persona.id = data.id),
            (this.persona.nombre = data.nombre),
            (this.persona.apellidos = data.apellidos)
          )
        )
        .catch((err) => console.log(err.message));
    },

    getPerson() {
      this.dbPersona
        .getPersona(this.idP)
        .then((res) => res.json())
        .then((data) => (this.upPersona = data))
        .catch((err) => console.log(err.message));
    },

    limpiar() {
      this.persona.apellidos = null;
      this.persona.id = null;
      this.persona.nombre = null;
    },
  },

  props: ["idP"],
};
</script>

<style>
#txtId {
  border-radius: 3px;
}
</style>
