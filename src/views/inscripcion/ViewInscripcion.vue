<template>
  <div id="ViewInscripcion">
    <div class="text-center">
      <Span class="h2">Inscripcion</Span>
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
      <px-modal-inscripcion />
      <px-modal-inscripcion-up />

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
            <th scope="col">IdPersona</th>
            <th scope="col">IdCarrera</th>
            <th scope="col">Fecha</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(i, index) in inscripciones" :key="i.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ i.id }}</td>
            <td>{{ i.idPersona }}</td>
            <td>{{ i.idCarrera }}</td>
            <td>{{ i.fecha }}</td>
            <td>
              <div>
                <button
                  :id="i.id"
                  class="btn btn-warning me-3"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdropUP"
                  @click="setId(i.id)"
                >
                  Editar
                </button>
                <button
                  :id="i.id"
                  class="btn btn-danger"
                  @click="deleteI(i.id)"
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
import ServInscripcion from "@/services/ServInscripcion";
import PxModalInscripcion from "@/components/Inscripcion/ModalInscripcion.vue";
import PxModalInscripcionUp from "@/components/Inscripcion/ModalInscripcionUp.vue";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "ViewInscripcion",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("Inscripcion", ["inscripciones"]),
    ...mapState("Inscripcion", ["inscripciones"]),
    ...mapState(["activeS", "activeE"]),
  },
  components: {
    PxModalInscripcion,
    PxModalInscripcionUp,
  },

  dbInscripcion: null,

  created() {
    this.dbInscripcion = new ServInscripcion();
  },

  mounted() {
    this.getAll();
  },

  methods: {
    ...mapMutations(["convertRESET", "convertS", "convertE"]),
    ...mapMutations("Inscripcion", ["setId"]),
    ...mapActions("Inscripcion", ["getAll"]),

    deleteI(id) {
      console.log("Llamada a delete inscripcion");
      this.dbInscripcion.delete(id).then((res) => {
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
