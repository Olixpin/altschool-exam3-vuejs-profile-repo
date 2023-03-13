import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Repos from "../views/Repos.vue";
import NotFound from "../views/NotFound.vue";
import Repo from "../views/Repo.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/repos",
    name: "Repos",
    component: Repos,
  },

  {
    path: "/repos/:id",
    name: "Repo",
    component: Repo,
  },

  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
