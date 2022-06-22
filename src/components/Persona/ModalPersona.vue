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
            ></button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="txtId">Id:</label>
              <input
                class="form-control"
                type="text"
                name=""
                id="txtId"
                v-model="persona.id"
              />
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
import { mapMutations, mapActions } from "vuex";
import ServPersona from "@/services/ServPersona";
export default {
  name: "PxModalPersona",
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
    ...mapMutations(["convertS", "convertE", "upGet"]),
    ...mapActions(["getAllPer"]),
    save() {
      this.dbPersona
        .save(this.persona)
        .then((response) => response.json())
        .then((res) => {
          console.log("Success:", res);
          this.limpiar();
          this.convertS(res.status);
          this.getAllPer();
        })
        .catch((error) => {
          console.error("Error:", error);
          this.convertE(error);
        });
    },

    limpiar() {
      this.persona.apellidos = null;
      this.persona.id = null;
      this.persona.nombre = null;
    },
  },
};
</script>
