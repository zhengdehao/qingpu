<template>
<!--臻品商品的详情页面  -->
  <div class="bestdetail">
    <!-- 随滑动高度切换切换的两个不同的头部 -->
    <detail-header-one v-if="!flag"></detail-header-one>
     <detail-header-two :themetitle="themeTitle" v-if="flag"></detail-header-two>
     <!-- 臻品的详情内容 -->
     <div class="wrapper">
       <div>
        <detail-banner/>
          <div class="content">
              <h2>{{themeTitle}}</h2>
              <div class="price">
                  <span>￥58.00</span><i>￥108.00 </i>
              </div>
              <p class="size"  @click="show = true">
                  <h4>规格及数量选择</h4>
                  <i>
                    <van-icon name="arrow" />
                  </i>
              </p>
              <h4>商品详情</h4>
              <div class="img">
              </div>
              <h4 class="h4">商品参数</h4>
          </div>
               
       </div>
    
     </div>
    <shop-bar></shop-bar>
  </div>
</template>

<script lang='ts'>
//两个切换的头部
import DetailHeaderOne from "../../components/Common/DetailHeaderOne.vue";
import DetailHeaderTwo from "../../components/Common/DetailHeaderTwo.vue";

import DetailBanner from "../../components/Common/DetailBanner.vue";
import BScroll from "better-scroll";

//底部的客服购物条
import ShopBar from "../../components/Best/Detail/ShopBar.vue";

export default {
  data() {
    return {
      show: false,
      flag: false as Boolean,
      themeTitle: "原创臻品|青普创|山海经图案多功能桌垫",
    };
  },

  components: {
    DetailHeaderOne,
    DetailHeaderTwo,
    DetailBanner,
    ShopBar,
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
      this.flag = position.y < -200;
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
.wrapper {
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0px;
}
.content {
  padding-bottom: 120px;
  padding-left: 22px;
  padding-right: 22px;
  h2 {
    padding-top: 31px;
    font-size: 20px;
  }
  .price {
    span {
      color: #ff494a;
      font-size: 18px;
    }
    i {
      padding-left: 7px;
      font-size: 13px;
      text-decoration: line-through;
    }
  }
  h4 {
    font-size: 16px;
    line-height: 74px;
    font-weight: normal;
  }
  .size {
    border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    overflow: hidden;
    h4 {
      float: left;
    }
    i {
      font-size: 20px;
      float: right;
      line-height: 74px;
    }
  }
  .img {
    width: 100%;
    height: 900px;
    background: yellowgreen;
  }
  .h4 {
    margin-top: 40px;
    border-top: 1px solid #e8e8e8;
  }
}
</style>
