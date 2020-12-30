<template>
  <!--溯心的详情页面 -->
  <div class="holiday">
    <!-- 随滑动高度切换切换的两个不同的头部 -->
    <detail-header-one v-show="!flag"></detail-header-one>
    <detail-header-two :themetitle="themeTitle" v-show="flag"></detail-header-two>
    <!-- 溯心的详情内容 -->
    <div class="wrapper">
      <div>
        <detail-banner />
        <div class="content">
          <h2>{{ themeTitle }}</h2>
          <p class="address">
            <span>江苏省苏州市姑苏区平江路1337号</span>
            <i>
              <van-icon name="location-o" size="22" color="#656565" />
            </i>
          </p>

          <div class="date">
            <div>
              <h5>入住</h5>
              <span>12月26日</span>
            </div>
            <i>/</i>
            <div>
              <h5 class="right">离开</h5>
              <span>12月28日</span>
            </div>
          </div>

          <div class="checkin">
            <div>
              <img
                src="http://42.192.155.18:3180/images/banner/banner_02.jpg"
                alt=""
              />
              <div class="roomsize">
                <h3>名门园景房</h3>
                <h4>35平方米</h4>
                <h4>双人床</h4>
                <h4>宜住2人</h4>
                <h5><span>￥1299</span> 起/晚</h5>
              </div>
              <p class="button">预订</p>
            </div>
            <div>
              <img
                src="http://42.192.155.18:3180/images/banner/banner_02.jpg"
                alt=""
              />
              <div class="roomsize">
                <h3>名门园景房</h3>
                <h4>35平方米</h4>
                <h4>双人床</h4>
                <h4>宜住2人</h4>
                <h5><span>￥1299</span> 起/晚</h5>
              </div>
              <p class="button">预订</p>
            </div>
          </div>

          <h6>住宿介绍</h6>
          <!-- 住宿介绍的html存在这里 -->
          <div class="html">
            <p>东钱湖万金烟波之南，福泉山与金峨山余脉之间，一条600米熙攘古埠贯穿其间，也让曾经以街兴市的韩岭村有了“浙东第-古村”的美誉.韩岭，千年前因韩氏族人定居而得名，百年来以商贸大兴而闻
名，形成了有别于其它江南古村镇的地方特色商业
社会体系，一度被称为“韩岭市”，并受到民间和官
方的认可.</p>
            <img src='http://42.192.155.18:3180/images/sx/nb01.png'/>
            <p>春去秋来，今日的韩岭虽随着近代交通发展渐失枢
纽之利，商贸往来由盛转衰.但韩岭文化却经过岁
月的积累和思考沉淀出含蓄包容的精神和自由活泼
的生活姿态.如果，你看腻了现代都市的纸醉金迷
与聒噪，又对冰冷生硬的岁月痕迹提不起兴趣，那
就来韩岭看看吧！在山间湖畔中，感受铅华落尽后
老街仍保有的别样市邑生活.</p>
            <img src='http://42.192.155.18:3180/images/sx/nb02.png'/>
            <p>宁波花间堂韩岭位于东钱湖南岸韩岭古街，依托韩
岭独居文化底蕴的建筑及自然景观，配合充满生活
情调及人文色彩浓厚的氛围，形成独具特色的江南
院落.建筑屋顶选用青瓦，利用拼接工艺将瓦片延
伸到墙面，让建筑简约但又保留了江南水乡的建筑特点.</p>
            <img src='http://42.192.155.18:3180/images/sx/nb03.png'/>
            <p>宁波花间堂:韩岭目前共有15间客房，客房在面向闾
巷或湖泊的方向设置了大量的落地玻璃窗，以便引
景入内，入住期间，您便可与自然融为一体.房间
内运用大量木枝、竹编和精细纱幔作为装饰，复现
老街当年渔樵市邑的生活之景.</p>
            <img src='http://42.192.155.18:3180/images/sx/nb04.png'/>
            <img src='http://42.192.155.18:3180/images/sx/nb05.png'/>
            <p>三栋围合的院落由粗朴的大理石铺就的小路连接，
客房和公区随处可见的坐榻，可看茶，可冥想，为
旅人打造--份独守的禅境.大堂的吧台处放置了各
类书籍，闲暇时光看上几页，或窝在多多的面包树
里喝一-杯源自丽江的锅煮奶茶，内省或洞察或追忆
当年繁华热闹的老街景象亦或是一种别样消磨时间
的方式.</p>
            <img src='http://42.192.155.18:3180/images/sx/nb06.png'/>
            <p>居于宁波花间堂韩岭，北望气魄钱湖，南临千年老
街，体味人与自然、社会沉淀的“动”静“之美，抛却
城市的喧嚣与快节奏的生活，用一段时光融入小镇
的节奏，感受这里文明的馈赠.</p>
            <img src='http://42.192.155.18:3180/images/sx/nb07.png'/>
          </div>

          <!-- 路线 -->
          <div class="path">
            <!-- path.tilte -->
            <p class="title">路线：(注：停车场收费，6元/小时或60/天)</p>
            <!-- for循环path.way -->
            <p>路线1：观前街地区(市中心)驾车距离1.2km(约6分钟)</p>
            <p>路线2:苏州火车站驾车距离4.9公km (约18分钟)</p>
            <!-- gpsImg  v-if gpsImg字段，宁波市没有gps图的 -->
            <img src="http://42.192.155.18:3180/images/banner/banner_02.jpg"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
//两个切换的头部
import DetailHeaderOne from "../../components/Common/DetailHeaderOne.vue";
import DetailHeaderTwo from "../../components/Common/DetailHeaderTwo.vue";

import DetailBanner from "../../components/Common/DetailBanner.vue";
import BScroll from "better-scroll";

//手风琴组件
import Collapse from "../../components/Home/holiday/Collapse.vue";
//底部的客服购物条
import ShopBar from "../../components/Best/Detail/ShopBar.vue";

import { ref } from "vue";

export default {
  setup() {
    const checked = ref("0");
    return { checked };
  },
  data() {
    return {
      flag: false as Boolean,
      themeTitle: "苏州文旅花间探花府",
    };
  },

  components: {
    DetailHeaderOne,
    DetailHeaderTwo,
    DetailBanner,
    ShopBar,
    Collapse,
  },

  computed: {},

  mounted() {
    this.$nextTick();
    let bs = new BScroll(".wrapper", {
      scrollX: false,
      scrollY: true,
      click: true,
      pullUpLoad: true,
      probeType: 3,
    });
    bs.on("scroll", (position) => {
      this.flag = position.y < -180;
    });
    bs.on("pullingUp", async () => {
      await this.$nextTick();
      bs.refresh();
    });
  },

  methods: {},
};
</script>
<style lang='less' scoped>
@import url("../../assets/styles/style.less");
.wrapper {
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0px;
}
.content {
  padding-bottom: 80px;
  padding-left: 23px;
  padding-right: 23px;
  h2 {
    padding-top: 30px;
    font-size: 24px;
  }
  h6 {
    line-height: 90px;
    font-size: 19px;
    font-weight: normal;
  }
  .address {
    display: flex;
    border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    justify-content: space-between;
    align-items: center;
    span {
      width: 290px;
      font-size: 19px;
      line-height: 74px;
      .ellipsis();
    }
  }
  .img {
    width: 100%;
    height: 900px;
    background: yellowgreen;
    img {
      width: 100%;
    }
  }
  .date {
    padding: 29px 0 36px 0;
    .center();
    border-bottom: 1px solid #e8e8e8;
    margin-bottom: 50px;
    > div {
      h5 {
        font-size: 15px;
      }
      .right {
        text-align: right;
      }
      span {
        color: @button-color;
        font-size: 15px;
      }
    }
    i {
      font-size: 40px;
      color: #e8e8e8;
      font-weight: 200;
      font-style: italic;
    }
  }
  .checkin {
    padding-bottom: 10px;
    border-bottom: 1px solid #e8e8e8;
    > div {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      padding-bottom: 20px;
    }
    img {
      width: 111px;
      height: 111px;
    }
    .roomsize {
      margin-left: -20px;
      height: 111px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h3 {
        font-weight: normal;
        font-size: 18px;
      }
      h4,
      h5 {
        font-weight: normal;
        font-size: 15px;
      }
      h4 {
        color: #666;
      }
      span {
        color: #ff494a;
      }
    }
    .button {
      width: 67px;
      height: 30px;
      background: @button-color;
      color: white;
      font-size: 14px;
      text-align: center;
      line-height: 30px;
      border-radius: 15px;
    }
  }
  .path {
    p {
      font-size: 12px;
      line-height: 30px;
    }
    img {
      width: 100%;
    }
    .title{
      font-weight: 700;
    }
  } 
  
  .html {
    p {
      font-size: 12px;
      line-height: 30px;
      margin: 10px;
    }
    img {
      width: 100%;
      margin: 10px 0;
    }
   
  }
  .select {
    padding-bottom: 34px;
    img {
      width: 84px;
      height: 55px;
      border-radius: 5px;
    }
    > h5 {
      padding-bottom: 30px;
    }
  }
}
</style>
