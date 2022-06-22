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
              <label id="txtId" class="bg-muted form-control">{{ id }}</label>
              <label for="txtIdInscripcion">Id De La Persona:</label>
              <input
                class="form-control"
                type="text"
                name=""
                id="txtIdPersona"
                v-model="inscripcion.idPersona"
              />
              <label for="txtIdCarrera">Id De La Carrera:</label>
              <input
                class="form-control"
                type="text"
                id="txtIdCarrera"
                v-model="Inscripcion.idCarrera"
              />

              <label for="txtFecha">Fecha:</label>
              <input
                class="form-control"
                type="text"
                id="txtApellidos"
                v-model="inscripcion.fecha"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="setLimpiar()"
            >
              Salir
            </button>
            <button class="btn btn-success" @click="getInscripcion(id)">
              Rellenar Campos
            </button>
            <button
              class="btn btn-primary"
              v-on:click="upDate(persona.id, persona), setLimpiar()"
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
import { mapMutations, mapActions, mapGetters, mapState } from "vuex";
import ServInscripcion from "@/services/ServInscripcion";
export default {
  name: "PxModalInscripcionUp",
  data() {
    return {};
  },
  dbInscripcion: null,
  computed: {
    ...mapGetters("Inscripcion", ["inscripcion"]),
    ...mapState("Inscripcion", ["inscripcion", "id"]),
  },
  created() {
    this.dbInscripcion = new ServInscripcion();
  },
  methods: {
    ...mapMutations(["convertS", "convertE", "upGet"]),
    ...mapMutations("Inscripcion", ["setLimpiar"]),
    ...mapActions("Inscripcion", ["getAll", "getInscripcion"]),
    upDate(id, inscripcion) {
      this.dbInscripcion
        .upDate(id, inscripcion)
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          this.setLimpiar();
          this.convertS(data.status);
          this.getAll();
        })
        .catch((error) => {
          console.error("Error:", error);
          this.convertE(error);
        });
    },
  },
};
</script>

<style>
#txtId {
  border-radius: 3px;
}
</style>
