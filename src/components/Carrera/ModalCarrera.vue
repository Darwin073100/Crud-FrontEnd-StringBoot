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
              <label for="txtNombre">Nombre:</label>
              <input
                class="form-control"
                type="text"
                id="txtNombre"
                v-model="carreraS.nombre"
              />

              <label for="txtCreditos">Creditos:</label>
              <input
                class="form-control"
                type="text"
                id="txtCreditos"
                v-model="carreraS.creditos"
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
import ServCarrera from "@/services/ServCarrera";
export default {
  name: "PxModalCarrera",
  data() {
    return {};
  },
  dbCarrera: null,
  created() {
    this.dbCarrera = new ServCarrera();
  },
  computed: {
    ...mapState("Carrera", ["carreraS"]),
  },
  methods: {
    ...mapMutations(["convertS", "convertE", "upGet"]),
    ...mapMutations("Carrera", ["setLimpiar"]),
    ...mapActions("Carrera", ["getAll"]),
    save() {
      this.dbCarrera
        .save(this.carreraS)
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
