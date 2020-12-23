
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: () => import("../views/Home/index.vue"),
    redirect: "/firstpage",
    children: [
      {//跳转首页
        path: "/firstpage",
        component: () => import("../views/Home/firstPage/index.vue")
      },
      {//跳转发现
        path: "/find",
        component: () => import("../views/Home/Find/index.vue")
      },
      {//跳转臻品
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
      {//跳转我的
        path: "/mine",
        component: () => import("../views/Home/Mine/index.vue")
      },
    ]
  },
  {//404页面
    path:  "/:catchAll(.*)",
    component: () => import("../views/Errer/index.vue")
  }
]

 
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
