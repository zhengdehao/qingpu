
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
        // redirect: "/best/recommend",
        // children: [
        //   {
        //     path: "recommend",
        //     component: () => import("../views/Home/Best/recommend/index.vue")
        //   }
        // ]
      },
      {//跳转我的
        path: "/mine",
        component: () => import("../views/Home/Mine/index.vue")
      }
    ]
  },
  {
    //我的页面优惠券路由
    path: "/mine/cheap",
    component: () => import("../components/Mine/list/cheap.vue")
  },
  {
    //我的页面个人信息路由
    path: "/mine/me",
    component: () => import("../components/Mine/list/me.vue")
  },
  {
    //我的页面臻品订单路由
    path: "/mine/products",
    component: () => import("../components/Mine/list/products.vue")
  },
  {
    //我的页面设置路由
    path: "/mine/set",
    component: () => import("../components/Mine/list/set.vue")
  },
  {
    //我的页面行程订单路由
    path: "/mine/travel",
    component: () => import("../components/Mine/list/travel.vue")
  },
  {
    //我的页面购物车路由
    path: "/mine/wish",
    component: () => import("../components/Mine/list/wish.vue")
  },
  {//人文之旅详情
    path: "/tourdetail",
    component: () => import("../views/Detail/tour.vue")
  },
  {//臻品详情
    path: "/bestdetail/:id",
    component: () => import("../views/Detail/best.vue"),
    props: true
  },
  {//主页的热门景点详情
    path: "/hotdetail",
    component: () => import("../views/Detail/hot.vue")
  },
  {//主页的人文假日详情
    path: "/holidaydetail",
    component: () => import("../views/Detail/holiday.vue")
  },
  {//主页溯心详情
    path: "/heartdetail",
    component: () => import("../views/Detail/heart.vue")
  },
  {//主页在地艺文体验详情
    path: "/artdetail",
    component: () => import("../views/Detail/art.vue")
  },
  {//404页面
    path: "/:catchAll(.*)",
    component: () => import("../views/Errer/index.vue")
  }
]



export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
