const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]


 
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
