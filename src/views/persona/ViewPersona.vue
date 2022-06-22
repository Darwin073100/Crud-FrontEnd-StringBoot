<template>
  <div id="ViewPersona">
    <div class="text-center">
      <Span class="h2">Persona</Span>
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
      <px-modal />
      <px-modal-up />

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
            <th scope="col">Apellido</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(p, i) in personas" :key="p.id">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ p.id }}</td>
            <td>{{ p.nombre }}</td>
            <td>{{ p.apellidos }}</td>
            <td>
              <div>
                <button
                  :id="p.id"
                  class="btn btn-warning me-3"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdropUP"
                  @click="setId(p.id)"
                >
                  Editar
                </button>
                <button
                  :id="p.id"
                  class="btn btn-danger"
                  @click="deleteP(p.id)"
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
import ServPersona from "@/services/ServPersona";
import PxModal from "@/components/Persona/ModalPersona.vue";
import PxModalUp from "@/components/Persona/ModalPersonaUp.vue";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "ViewPersona",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("Persona", ["personas"]),
    ...mapState("Persona", ["personas"]),
    ...mapState(["activeS", "activeE"]),
  },
  components: {
    PxModal,
    PxModalUp,
  },

  dbPersona: null,

  created() {
    this.dbPersona = new ServPersona();
  },

  mounted() {
    this.getAll();
  },

  methods: {
    ...mapMutations(["convertRESET", "convertS", "convertE"]),
    ...mapMutations("Persona", ["setId"]),
    ...mapActions("Persona", ["getAll"]),

    deleteP(id) {
      console.log("Llamada a delete persona");
      this.dbPersona.delete(id).then((res) => {
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
