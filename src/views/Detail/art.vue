<template>
  <!--在地艺文体验的详情页面 -->
  <div class="art">
    <!-- 随滑动高度切换切换的两个不同的头部 -->
    <detail-header-one v-if="!flag"></detail-header-one>
    <detail-header-two :themetitle="detailData.title" v-if="flag"></detail-header-two>
    <!-- 在地艺文体验的详情内容 -->
    <div class="wrapper">
      <div>
        <detail-banner :bannerList="detailData.sliderImgs"/>
        <div class="content">
          <h2>{{ detailData.title }}</h2>
          <h3>套餐内容</h3>
          <!-- 套餐内容的html存在这里 -->
            <div id="detailbox">
              <div id="detailboxx">
                <div id="detailhtmlbox">
                    <div v-html="detailData.des" id="html"></div>
                </div>
              </div>
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
//引入api
import { postExpDetailApi } from "../../utils/api";
export default {
  data() {
    return {
      flag: false as Boolean,
      detailData: []
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
    bs.on("scroll", (position:any) => {
      this.flag = position.y < -180;
    });
    bs.on("pullingUp", async () => {
      await this.$nextTick();
      bs.refresh();
    });
    //请求详情页数据
    this.postExpDetail();
  },
  methods: {
    //请求详情页数据
    async postExpDetail(){
      const res = await postExpDetailApi({ id:this.$route.params.artId });
      this.detailData = res.result[0];
    }
  },
};
</script>
<style lang='less'>
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

  #detailbox #detailboxx #detailhtmlbox #html {
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
