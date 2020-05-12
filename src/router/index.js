import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import FourCard from "@/views/challenges/FourCard/FourCard";
import BaseApparelComingSoon from "@/views/challenges/BaseApparelComingSoon/BaseApparelComingSoon";

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
  },
  {
    path: "/base-apparel",
    name: "Base Apparel Coming Soon Challenge",
    component: BaseApparelComingSoon
  }
];

const router = new VueRouter({
  routes
});

export default router;
