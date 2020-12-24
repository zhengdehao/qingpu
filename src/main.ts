import { createApp } from 'vue';
import App from './App.vue';
import { router } from "./routes";
import 'vant/lib/index.css';

//引入文件
import "./assets/styles/reset.less";
//引入iconfont.css
// import "./assets/font/iconfont.css";
import "amfe-flexible";
//引入vant组件
import { 
  Swipe,
  SwipeItem,
  Tabbar,
  TabbarItem,
  Icon,
} from 'vant';



const app = createApp(App);
// import { Icon } from 'vant';

//使用router
app.use(router);

//使用vant组件
//首页萝卜图
app.use(Swipe);
app.use(SwipeItem);
//底部tab栏
app.use(Tabbar);
app.use(TabbarItem);

//我的页面
//引入箭头图标
app.use(Icon);



//挂载a'p'p
app.mount('#app');
