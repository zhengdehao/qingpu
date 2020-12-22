import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { router } from "./routes";
import 'vant/lib/index.css';
import "amfe-flexible";
import { 
  Button,
  Swipe,
  SwipeItem
} from 'vant';



const app = createApp(App);
app.use(router);
app.use(Button);
app.use(Swipe);
app.use(SwipeItem);

app.mount('#app');
