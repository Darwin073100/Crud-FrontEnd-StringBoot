<template>
  <div>
    <!-- Modal Insertar -->
    <div
      class="modal fade"
      id="staticBackdrop"
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
              Formulario Insert
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="setLimpiar()"
            ></button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="txtIdPersona">Id De La Persona:</label>
              <input
                class="form-control"
                type="text"
                name=""
                id="txtIdPersona"
                v-model="inscripcionS.idPersona"
              />
              <label for="txtIdCarrera">Id De La Carrera:</label>
              <input
                class="form-control"
                type="text"
                id="txtIdCarrera"
                v-model="InscripcionS.idCarrera"
              />

              <label for="txtFecha">Fecha:</label>
              <input
                class="form-control"
                type="text"
                id="txtApellidos"
                v-model="inscripcionS.fecha"
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
            <input
              type="button"
              class="btn btn-primary"
              v-on:click="save()"
              value="Guardar"
              data-bs-dismiss="modal"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";
import ServInscripcion from "@/services/ServInscripcion";
export default {
  name: "ModalInscripcion",
  data() {
    return {};
  },
  dbInscripcion: null,
  created() {
    this.dbInscripcion = new ServInscripcion();
  },
  computed: {
    ...mapState("Inscripcion", ["inscripcionS"]),
  },
  methods: {
    ...mapMutations(["convertS", "convertE", "upGet"]),
    ...mapMutations("Inscripcion", ["setLimpiar"]),
    ...mapActions("Inscripcion", ["getAll"]),
    save() {
      this.dbInscripcion
        .save(this.inscripcionS)
        .then((response) => response.json())
        .then((res) => {
          console.log("Success:", res);
          this.setLimpiar();
          this.convertS();
          this.getAll();
        })
        .catch((error) => {
          console.error("Error:", error);
          this.convertE();
        });
    },
  },
};
</script>
