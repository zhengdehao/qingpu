import { createApp } from 'vue';
import App from './App.vue';
import { router } from "./routes";
import 'vant/lib/index.css';

//引入文件
import "./assets/styles/reset.less";
import "amfe-flexible";
//引入vant组件
import { 
  Swipe,
  SwipeItem,
  Tabbar,
  TabbarItem,
  Cell,
  CellGroup
} from 'vant';



const app = createApp(App);

//使用router
app.use(router);

//使用vant组件
app.use(Swipe);
app.use(SwipeItem);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Cell);
app.use(CellGroup);



//挂载a'p'p
app.mount('#app');
