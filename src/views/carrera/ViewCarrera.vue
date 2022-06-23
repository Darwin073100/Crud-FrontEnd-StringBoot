<template>
  <div id="ViewCarrera">
    <div class="text-center">
      <Span class="h2">Carrera</Span>
    </div>
    <div class="table-responsive m-5">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary m-2"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Agregar Un Registro
      </button>
      <px-modal-carrera />
      <px-modal-carrera-up />

      <div v-if="activeS">
        <div class="alert alert-success m-2 alert-dismissible">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            @click="convertRESET()"
          ></button>
          <strong>¡Éxito!</strong> La Acción Se Ha Realizado Satisfactoriamente.
        </div>
      </div>
      <div v-if="activeE">
        <div class="alert alert-danger m-2 alert-dismissible">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            @click="convertRESET()"
          ></button>
          <strong>¡Error!</strong> La Acción No Se Pudo Llevar Acabo.
        </div>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Creditos</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(c, i) in carreras" :key="c.id">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ c.id }}</td>
            <td>{{ c.nombre }}</td>
            <td>{{ c.creditos }}</td>
            <td>
              <div>
                <button
                  :id="c.id"
                  class="btn btn-warning me-3"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdropUP"
                  @click="setId(c.id)"
                >
                  Editar
                </button>
                <button
                  :id="c.id"
                  class="btn btn-danger"
                  v-on:click="deleteC(c.id)"
                >
                  Eliminar
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ServCarrera from "@/services/ServCarrera";
import PxModalCarrera from "@/components/Carrera/ModalCarrera.vue";
import PxModalCarreraUp from "@/components/Carrera/ModalCarreraUp.vue";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "ViewCarrera",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("Carrera", ["carreras"]),
    ...mapState("Carrera", ["carreras"]),
    ...mapState(["activeS", "activeE"]),
  },
  components: {
    PxModalCarrera,
    PxModalCarreraUp,
  },

  dbCarrera: null,

  created() {
    this.dbCarrera = new ServCarrera();
  },

  mounted() {
    this.getAll();
  },

  methods: {
    ...mapMutations(["convertRESET", "convertS", "convertE"]),
    ...mapMutations("Carrera", ["setId"]),
    ...mapActions("Carrera", ["getAll"]),

    deleteC(id) {
      let deleteResp = this.dbCarrera.delete(id);
      deleteResp.then((res) => {
        if (res.ok) {
          console.log("Peticion correcta", res.status);
          this.convertS();
          this.getAll();
        } else {
          console.error("Peticion incorrecta", res.status);
          this.convertE();
          this.getAll();
        }
      });
    },
  },
};
</script>
