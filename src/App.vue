<template>
  <div id="app">
    <px-inicio />
    <router-view />
  </div>
</template>
<script>
import PxInicio from "./components/Inicio.vue";

export default {
  name: "App",
  components: {
    PxInicio,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
