<template>
  <div id="ViewPersona">
    <div class="text-center">
      <Span class="h2">Persona</Span>
    </div>
    <button class="mx-5 btn btn-warning" @click="refresh()">Refresh</button>
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
      <px-modal-up :idP="id" />

      <div v-if="activeT">
        <div class="alert alert-success m-2 alert-dismissible">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            @click="active()"
          ></button>
          <strong>¡Éxito!</strong> La Acción Se Ha Realizado Satisfactoriamente.
          (Status: {{ params }})
        </div>
      </div>
      <div v-if="activeF">
        <div class="alert alert-danger m-2 alert-dismissible">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            @click="active()"
          ></button>
          <strong>¡Error!</strong> La Acción No Se Pudo Llevar Acabo. (Status:
          {{ params }})
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
                  @click="selectID(p.id)"
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

export default {
  name: "ViewPersona",
  data() {
    return {
      personas: [],
      id: null,
      params: "",
      store: null,
    };
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
    this.dbPersona
      .getAll()
      .then((res) => res.json())
      .then((data) => (this.personas = data))
      .catch((err) => console.log(err.message));
  },

  methods: {
    active() {
      this.activeT = false;
      this.activeF = false;
    },

    selectID(id) {
      this.id = id;
    },
    deleteP(id) {
      console.log("Llamada a delete persona");
      this.dbPersona.delete(id).then((res) => {
        if (res.ok) {
          console.log("Peticion correcta", res.status);
          this.activeT = true;
          this.params = res.status;
          this.refresh();
        } else {
          console.error("Peticion incorrecta", res.status);
          this.activeF = true;
          this.params = res.status;
        }
      });
    },

    refresh() {
      this.dbPersona
        .getAll()
        .then((res) => res.json())
        .then((data) => (this.personas = data))
        .catch((err) => console.log(err.message));
    },
  },
};
</script>
