import { createApp } from 'vue';
import App from './App.vue';
import { router } from "./routes";
import "../src/assets/font/iconfont.css";
import 'vant/lib/index.css';

//引入文件
import "./assets/styles/reset.less";
import "amfe-flexible";
import "./assets/font/iconfont.css";
import "./assets/styles/style.less";
//引入vant组件
import { 
  Swipe,
  SwipeItem,
  Tabbar,
  TabbarItem,
  Cell,
  CellGroup,
  NavBar,
  Tab,
  Tabs
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


//头部导航栏
app.use(NavBar);

//臻品分页栏
app.use(Tab);
app.use(Tabs);


//挂载a'p'p
app.mount('#app');
