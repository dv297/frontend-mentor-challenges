import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import FourCard from "@/views/challenges/FourCard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/four-card",
    name: "Four Card Challenge",
    component: FourCard
  }
];

const router = new VueRouter({
  routes
});

export default router;
