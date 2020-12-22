const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

<<<<<<< HEAD:src/routes/index.ts

=======
 
>>>>>>> master:src/routes/index.ts
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
