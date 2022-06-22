<template>
  <div class="bg-primary pt-2 px-2">
    <router-link to="/" class="btn btn-dark">Inicio</router-link>
    <div class="bg-primary h1 text-white" id="nav">
      Consumo Del API De SpringBoot Y DB PostgreSQL
    </div>
  </div>
</template>

<script>
export default {
  name: "PxInicio",
  data() {
    return {};
  },
};
</script>
<style scoped>
#nav {
  padding: 8px;
  text-align: center;
}
</style>
