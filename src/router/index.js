import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/dynamicForm",
    name: "DynamicForm",
    component: () => import("../views/DynamicForm.vue"),
  },
  {
    path: "/basic",
    name: "Basic",
    component: () => import("../views/Basic.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
