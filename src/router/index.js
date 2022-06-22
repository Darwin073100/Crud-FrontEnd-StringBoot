import Vue from "vue";
import VueRouter from "vue-router";

import Inicio from "@/views/ViewInicio.vue";
import Persona from "@/views/persona/ViewPersona.vue";
import Carrera from "@/views/carrera/ViewCarrera";
import Inscripcion from "@/views/inscripcion/ViewInscripcion";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ViewInicio",
    component: Inicio,
  },
  {
    path: "/persona",
    name: "ViewPersona",
    component: Persona,
  },
  {
    path: "/carrera",
    name: "ViewCarrera",
    component: Carrera,
  },
  {
    path: "/inscripcion",
    name: "ViewInscripcion",
    component: Inscripcion,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
