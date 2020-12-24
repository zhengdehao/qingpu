import { createApp } from 'vue';
import App from './App.vue';
import { router } from "./routes";
import "../src/assets/font/iconfont.css";
import 'vant/lib/index.css';

//引入文件
import "./assets/styles/reset.less";
//引入iconfont.css
// import "./assets/font/iconfont.css";
import "amfe-flexible";
import "./assets/font/iconfont.css";
import "./assets/styles/style.less";
//引入vant组件
import { 
  Swipe,
  SwipeItem,
  Tabbar,
  TabbarItem,
  Icon,
  Cell,
  CellGroup,
  NavBar,
  Tab,
  Tabs,
  Toast
} from 'vant';



const app = createApp(App);
// import { Icon } from 'vant';

//使用router
app.use(router);

//啾啾组件
app.use(Swipe);
app.use(SwipeItem);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Cell);
app.use(CellGroup);
app.use(Toast);


//头部导航栏
app.use(NavBar);

//臻品分页栏
app.use(Tab);
app.use(Tabs);

//我的页面
//引入箭头图标
app.use(Icon);



//挂载a'p'p
app.mount('#app');
