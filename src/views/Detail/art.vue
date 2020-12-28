<template>
  <!--在地艺文体验的详情页面 -->
  <div class="art">
    <!-- 随滑动高度切换切换的两个不同的头部 -->
    <detail-header-one v-if="!flag"></detail-header-one>
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
            <h4>「艺文介绍」</h4>
            <p>
              在青普扬州瘦西湖文化行馆，您将跟随边城书店主理人、古籍修复研究学者王军
              ，来一起探秘“古籍的世界“，
              触摸古籍的温度，分辨古籍的真伪，聆听辗转于历代文人之手的书香故事，
              体验古籍修复或古籍灯的制作，亲手点燃古籍智慧之光辉.
            </p>
            <img
              src="http://42.192.155.18:3180/images/banner/banner_02.jpg"
              alt=""
            />
            <img
              src="http://42.192.155.18:3180/images/banner/banner_02.jpg"
              alt=""
            />
            <img
              src="http://42.192.155.18:3180/images/banner/banner_02.jpg"
              alt=""
            />
            <p>
              古籍于现代生活而言，
              似乎已是一种遥远的存在，但它曾经是古人生活中不可或缺的一部分，
              承载着厚重的文化和雅趣的生活方式.
            </p>
            <img
              src="http://42.192.155.18:3180/images/banner/banner_02.jpg"
              alt=""
            />
            <h4>「导师介绍」</h4>
            <p>王军:边城书店主理人，古籍收藏与古籍修复研究学者</p>
            <img
              src="http://42.192.155.18:3180/images/banner/banner_02.jpg"
              alt=""
            />
          </div>

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
      padding: 10px 0;
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
