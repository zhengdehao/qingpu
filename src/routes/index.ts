
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: () => import("../views/Home/index.vue"),
    children: [
      {
        path: "/find",
        component: () => import("../views/Home/Find/index.vue")
      },
      {
        path: "/best",
        component: () => import("../views/Home/Best/index.vue")
      },
      {
        path: "/mine",
        component: () => import("../views/Home/Mine/index.vue")
      },
    ]
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
