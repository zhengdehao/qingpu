import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { router } from "./routes"
import Vant from 'vant'
import 'vant/lib/index.css'





const app = createApp(App);
app.use(router);
app.use(Vant)
app.mount('#app');
