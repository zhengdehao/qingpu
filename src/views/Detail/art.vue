<template>
  <!--在地艺文体验的详情页面 -->
  <div class="art">
    <!-- 随滑动高度切换切换的两个不同的头部 -->
    <detail-header-one v-show="!flag"></detail-header-one>
    <detail-header-two :themetitle="themeTitle" v-if="flag"></detail-header-two>
    <!-- 在地艺文体验的详情内容 -->
    <div class="wrapper">
      <div>
        <detail-banner />
        <div class="content">
          <h2>{{ themeTitle }}</h2>
          <h3>套餐内容</h3>
          <!-- 套餐内容的html存在这里 -->
          <div class="html">
            <h4>【艺文介绍】</h4>
            <p>湿版摄影，它来自于19世纪，比胶片还要久远.湿版摄影用玻璃等当底片，在干净的玻璃上涂火棉胶为主材的溶剂，再浸入硝酸银，取出后在保持湿润的同时进行拍摄，然后显影，定影，根据喜好，把底片做成正片或者负片的摄影技术。</p>
            <p></p>
            <img src='http://42.192.155.18:3180/images/art/bj/beijing_tiyan04_con_01.png'/>
            <p>湿版摄影作品有迷人的影调和意想不到的效果，超现实的幻境.拍出来的每-张照片都独--无二，无法复制.跟随导师体验一场魔术-般的湿版摄影术，收获一张仪式感的湿版肖像照。</p>
            <img src='http://42.192.155.18:3180/images/art/bj/beijing_tiyan04_con_02.png'/>
            <h4>【导师介绍】</h4>
            <p>邸晋军，中国内地最早使用湿法火棉胶黑玻璃板工艺用于艺术创作的实践者.1978年年出生于山西.二03年毕业于北京电影学院摄影学院.曾任“生活”杂志摄影师。现任《新京报》摄影记者。2010年获得法国才华摄影基金中国区肖像类冠军.2011年年获得第一届全国青年摄影大展评委会推荐奖.2012年年获得台北国际摄影节年度最佳新锐摄影师奖.2013年获得美国pdn(摄影新闻)摄影奖个人组别奖，入选为T0P20中国当代摄影新锐之一</p>
             <p>昌昊，青普文化导师，有颜有才、有趣有识的斜杠青年.摄影师，其导演与摄制作品曾获得金鸡百花奖；手作达人，擅长金银细工、天然植物染等多项非遗工艺，是“六物法则”系列手作产品的原创设计。</p> 
          </div>
           <!-- 用v-if判断suitable字段是不是为空字符串 -->
          <div class="suitable">
            <h3>使用人群</h3>
            <p>建议10岁以上人群体验，6-10岁小朋友需由家长陪同</p>
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

export default {
  data() {
    return {
      flag: false as Boolean,
      themeTitle: "古籍智慧之光——我在青普修古籍",
    };
  },

  components: {
    DetailHeaderOne,
    DetailHeaderTwo,
    DetailBanner,
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
    padding: 30px 0;
    font-size: 24px;
  }
  h3 {
    font-size: 19px;
    font-weight: normal;
  }

  .html {
    p {
      font-size: 12px;
      line-height: 30px;
    }
    img {
      width: 100%;
      margin: 10px 0;
    }
    h4 {
      font-size: 12px;
      text-align: center;
      padding-top: 20px;
    }
  }
  .suitable {
    border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    padding: 20px 0;
    p {
      padding-top: 20px;
      font-size: 18px;
    }
  }
}
</style>
