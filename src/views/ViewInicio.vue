<template>
  <div class="component m-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-4 col-lg-3 col-xl-3">
        <div class="card">
          <div class="card-header d-flex justify-content-center">
            <span class="h2">Carrera</span>
          </div>
          <div class="card-body d-flex justify-content-center">
            <img id="img" src="../assets/carrera.svg" alt="" />
          </div>
          <div class="card-footer d-flex justify-content-center">
            <router-link to="/carrera" class="btn btn-primary"
              >Más Información</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-md-4 col-lg-3 col-xl-3">
        <div class="card">
          <div class="card-header d-flex justify-content-center">
            <span class="h2">Persona</span>
          </div>
          <div class="card-body d-flex justify-content-center">
            <img id="img" src="../assets/persona.svg" alt="" />
          </div>
          <div class="card-footer d-flex justify-content-center">
            <router-link to="/persona" class="btn btn-primary"
              >Más Información</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-md-4 col-lg-3 col-xl-3">
        <div class="card">
          <div class="card-header d-flex justify-content-center">
            <span class="h2">Inscripción</span>
          </div>
          <div class="card-body d-flex justify-content-center">
            <img id="img" src="../assets/inscription.svg" alt="" />
          </div>
          <div class="card-footer d-flex justify-content-center">
            <router-link to="/inscripcion" class="btn btn-primary"
              >Más Información</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewInicio",
  data() {
    return {};
  },
};
</script>
<style scoped>
#img {
  height: 120px;
}
</style>
