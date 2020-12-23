
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
        component: () => import("../views/Find/index.vue")
      },
      {
        path: "/best",
        component: () => import("../views/Home/Best/index.vue"),
        redirect: "/best/recommend",
        children: [
          {
            path: "recommend",
            component: () => import("../views/Home/Best/recommend/index.vue")
          }
        ]
      },
      {
        path: "/mine",
        component: () => import("../views/Mine/index.vue")
      }
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
