<template>
  <div class="tour">
    <!-- 随滑动高度切换切换的不同的头部样式 -->
    <detail-header :themetitle="themeTitle" :flag="flag"></detail-header>
    <!-- 臻品的详情内容 -->
    <div class="wrapper">
      <div>
        <detail-banner />
        <div class="content">
          <h2>{{ themeTitle }}</h2>
          <div class="price"><span>￥5088.00</span><i>起</i></div>
          <p class="size">
            <span>5天4晚</span>
            <i>
              <van-icon name="notes-o" size="22" color="#656565" />
            </i>
          </p>
          <div class="img">
            <img
              src="http://42.192.155.18:3180/images/banner/banner_02.jpg"
              alt=""
            />
          </div>
          <div class="explain">
            <van-cell title="费用说明" is-link />
            <van-cell title="注意事项" is-link />
          </div>
        </div>
      </div>
    </div>
  </div>
  <shop-bar />
</template>

<script lang="ts">
//头部
import DetailHeader from "../../components/Common/DetailHeader.vue";
import DetailBanner from "../../components/Common/DetailBanner.vue";
import ShopBar from "../../components/Home/tour/ShopBar.vue";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      flag: false as Boolean,
      themeTitle: "青普x鼓浪屿|一场建筑与文化的交融",
    };
  },

  components: {
    DetailHeader,
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
  padding-left: 22px;
  padding-right: 22px;
  h2 {
    padding-top: 29px;
    font-size: 28px;
  }
  .price {
    padding-top: 30px;
    padding-bottom: 30px;
    span {
      color: #ff494a;
      font-size: 18px;
      vertical-align: middle;
      font-family: DIN-Light;
    }
    i {
      padding-left: 4px;
      font-size: 13px;
      vertical-align: middle;
    }
  }
  h4 {
    font-size: 16px;
    line-height: 74px;
    font-weight: normal;
  }
  .size {
    display: flex;
    border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    padding: 26px 0;
    justify-content: space-between;
    align-items: center;
    span {
      width: 296px;
      font-size: 16px;
      line-height: 24px;
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
  .explain {
    margin-top: 20px;
    border-top: 1px solid #e8e8e8;
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
</style>
