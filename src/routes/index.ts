
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: () => import("../views/Home/index.vue")
  },
  {
    path: "/find",
    component: () => import("../views/Find/index.vue")
  },
  {
    path: "/best",
    component: () => import("../views/Best/index.vue")
  },
  {
    path: "/mine",
    component: () => import("../views/Mine/index.vue")
  },
  {
    path:  "/:catchAll(.*)",
    component: () => import("../views/Errer/index.vue")
  }
]

 
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
