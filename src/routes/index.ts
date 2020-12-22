const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

<<<<<<< HEAD:src/routes/index.js
import { createRouter,createWebHashHistory } from "vue-router"
=======
import { createRouter, createWebHashHistory } from "vue-router"
>>>>>>> a947af455a609b7a699df81a142681e83b52487f:src/routes/index.ts

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

 
export const router = createRouter({
  history: createWebHashHistory(),
<<<<<<< HEAD:src/routes/index.js
  routes, 
=======
  routes,
>>>>>>> a947af455a609b7a699df81a142681e83b52487f:src/routes/index.ts
})
