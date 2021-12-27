import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import( "../views/Login.vue"),
  },
  {
    path: "/registration",
    name: "Registration",
    component: () =>
      import( "../views/Registration.vue"),
  },
  {
    path: "/news",
    name: "News",
    component: () =>
      import("../views/News.vue"),
  },
  {
    path: "/database",
    name: "Database",
    component: () =>
      import("../views/Database.vue"),
  },
  {
    path: "/messages",
    name: "Messages",
    component: () =>
      import("../views/Messages.vue"),
  },
  {
    path: "/profil",
    name: "Profil",
    component: () =>
      import( "../views/Profil.vue"),
  },
  {
    path: "/profil_edit",
    name: "EditProfil",
    component: () =>
      import( "../views/EditProfil.vue"),
  },
  {
    path: "/kalendar",
    name: "Kalendar",
    component: () =>
      import( "../views/Kalendar.vue"),
  },
  {
    path: "/tekhpodderzhka",
    name: "Tekhpodderzhka",
    component: () =>
      import( "../views/Tekhpodderzhka.vue"),
  },
  {
    path: "/analytics",
    name: "Analytics",
    component: () =>
      import( "../views/Analytics.vue"),
  },

  


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
