import { createApp } from 'vue';
import App from './App.vue';
import { router } from "./routes";
import "../src/assets/font/iconfont.css";
import 'vant/lib/index.css';

import { store,key } from "./store/index" ;
//引入文件
import "./assets/styles/reset.less";

import "amfe-flexible";
//引入iconfont.css
import "./assets/font/iconfont.css";
import "./assets/styles/style.less";
import "./assets/styles/jiujiu.less";

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
  Card,
  Button,
  Toast,
  ShareSheet,
  Collapse, 
  CollapseItem,
  RadioGroup,
  Radio,
  Field,
  SwipeCell,
  Popup
} from 'vant';



const app = createApp(App);

//使用router
app.use(router);

//啾啾组件
app.use(Swipe);
app.use(SwipeItem);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Cell);
app.use(CellGroup);
app.use(Card);
app.use(Button);
app.use(Popup);


app.use(Toast);

//使用vant的icon
app.use(Icon);


//头部导航栏
app.use(NavBar);

//臻品分页栏
app.use(Tab);
app.use(Tabs);

//使用分享弹框
app.use(ShareSheet);

// Collapse折叠面板组件
app.use(Collapse);
app.use(CollapseItem);

//单选框
app.use(RadioGroup);
app.use(Radio);
app.use(Field);

//购物车使用商品滑块
app.use(SwipeCell);

//vuex中使用支持ts
app.use(store,key);

//挂载a'p'p
app.mount('#app');
