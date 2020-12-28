
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
  {//人文之旅详情
    path:"/tourdetail",
    component:()=>import("../views/Detail/tour.vue")
  },
  {//臻品详情
    path:"/bestdetail",
    component:()=>import("../views/Detail/best.vue")
  },
  {//主页的热门景点详情
    path:"/hotlist",
    component:()=>import("../views/Detail/hot.vue")
  },
    {//主页的人文假日详情
      path:"/holidaydetail",
      component:()=>import("../views/Detail/holiday.vue")
    },
  {//404页面
    path:  "/:catchAll(.*)",
    component: () => import("../views/Errer/index.vue")
  }
]



export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
