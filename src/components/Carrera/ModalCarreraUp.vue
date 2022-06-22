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
              <label for="txtNombre">Nombre:</label>
              <input
                class="form-control"
                type="text"
                id="txtNombre"
                v-model="carrera.nombre"
              />

              <label for="txtCreditos">Creditos:</label>
              <input
                class="form-control"
                type="text"
                id="txtCreditos"
                v-model="carrera.creditos"
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
            <button class="btn btn-success" @click="getCarrera(id)">
              Rellenar Campos
            </button>
            <button
              class="btn btn-primary"
              v-on:click="upDate(carrera.id, carrera), setLimpiar()"
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
import ServCarrera from "@/services/ServCarrera";
export default {
  name: "PxModalCarreraUp",
  data() {
    return {};
  },
  dbPersona: null,
  computed: {
    ...mapGetters("Carrera", ["carrera"]),
    ...mapState("Carrera", ["carrera", "id"]),
  },
  created() {
    this.dbCarrera = new ServCarrera();
  },
  methods: {
    ...mapMutations(["convertS", "convertE", "upGet"]),
    ...mapMutations("Carrera", ["setLimpiar"]),
    ...mapActions("Carrera", ["getAll", "getCarrera"]),
    upDate(id, carrera) {
      this.dbCarrera
        .upDate(id, carrera)
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
