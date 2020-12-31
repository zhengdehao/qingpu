<template>
<!-- ?????下来的padding-bottom有点问题 -->
<!--人文假日的详情页面 -->
  <div class="holiday">
      <!-- 随滑动高度切换切换的不同的头部样式 -->
    <detail-header :themetitle="detailData.title" :flag="flag"></detail-header>
      <!-- 臻品的详情内容 -->
      <div class="wrapper">
        <div>
          <detail-banner :bannerList="detailData.sliderImgs"/>
            <div class="content">
                <h2>{{ detailData.title }}</h2>
                <div class="price">
                    <span>{{ detailData.price }}</span><i>起</i>
                </div>
                <p class="size">
                    <span>{{ detailData.info }}</span>
                    <i>
                      <van-icon name="notes-o" size="22" color="#656565" />
                    </i>
                </p>
                <div class="img">
                  <img :src="detailData.des" alt="">
                </div>
                <collapse/>
                <div class="path">
                  <img :src="detailData.bgImg" alt="">
                  <div>
                    <p>
                      <h4>{{ detailData.cityName }}</h4>
                      <h5>{{ detailData.address }}</h5>
                    </p>
                    <van-icon name="location-o" />
                  </div>
                  <div>
                    <p>
                      <h4>附近交通枢纽</h4>
                      <h5>{{ detailData.trans }}</h5>
                    </p>
                    <van-icon name="exchange" />
                  </div>
                  <div>
                    <p>
                      <h4>推荐路线方案</h4>
                      <h5 v-for="item in detailData.goodtrans" :key="item">{{ item }}</h5>
                    </p>
                    <van-icon name="cluster-o" />
                  </div>
                </div>
                <div class="select">
                  <h4>规划您的假期旅程</h4>
                  <h5>挑选入住环境</h5>

                  <van-radio-group v-model="checked">
                    <div class="checkin" v-for="(item, index) in detailData.beds" :key="index">
                      <img :src="item.bgImg" alt="">
                      <p>
                        <h5>{{ item.title }} <van-icon name="arrow" /></h5>
                        <h6>客房面积：{{ item.area }}㎡</h6>
                      </p>
                      <!-- 单选框的name在循环的时候，需要用index当值 -->
                        <van-radio :name="index" checked-color="#388388"></van-radio>
                    </div>
                </van-radio-group></div>
                <p class="button">立即体验</p>
            </div>
        </div>
      </div>
  </div>
</template>

<script lang='ts'>
//头部
import DetailHeader from "../../components/Common/DetailHeader.vue";

import DetailBanner from "../../components/Common/DetailBanner.vue";
import BScroll from "better-scroll";

//手风琴组件
import Collapse from "../../components/Home/holiday/Collapse.vue";
//底部的客服购物条
import ShopBar from "../../components/Best/Detail/ShopBar.vue";
//引入api
import { postHolidayApi } from "../../utils/api";

import { ref } from "vue";
export default {
  setup() {
    const checked = ref("0");
    return { checked };
  },
  data() {
    return {
      flag: false as Boolean,
      detailData: {},
    };
  },

  components: {
    DetailHeader,
    DetailBanner,
    ShopBar,
    Collapse,
  },

  computed: {},

  mounted() {
    //请求详情页的数据
    this.postHoliday();
  },

  methods: {
    //请求详情页数据
    async postHoliday() {
      const res = await postHolidayApi({ id: this.$route.params.homeDetailId });
      this.detailData = res.result[0];
      this.$nextTick();
      let bs = new BScroll(".wrapper", {
        scrollX: false,
        scrollY: true,
        click: true,
        pullUpLoad: true,
        probeType: 3,
      });
      bs.on("scroll", (position: any) => {
        this.flag = position.y < -180;
      });
      bs.on("pullingUp", async () => {
        await this.$nextTick();
        bs.refresh();
      });
    },
  },
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
  padding-bottom: 30px;
  padding-left: 22px;
  padding-right: 22px;
  h2 {
    padding-top: 29px;
    font-size: 20px;
  }
  .price {
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
    line-height: 68px;
    font-weight: normal;
  }
  .size {
    display: flex;
    border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    padding: 26px 0;
    margin-bottom: 60px;
    justify-content: space-between;
    align-items: center;
    span {
      width: 296px;
      font-size: 16px;
      line-height: 24px;
    }
  }
  .img {
    img {
      width: 375px;
      margin-left: -22px;
    }
  }
  .path {
    border-bottom: 1px solid #e8e8e8;
    padding-bottom: 30px;
    img {
      width: 100%;
      border-radius: 5px;
    }
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  h4 {
    font-size: 18px;
  }
  h5 {
    font-size: 14px;
    font-weight: normal;
    padding-left: 10px;
    line-height: 22px;
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
    .checkin {
      padding: 7px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        width: 194px;
        h5,
        h6 {
          width: 100%;
          padding: 5px 0px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        h6 {
          font-size: 16px;
          font-weight: normal;
          color: #666;
        }
      }
    }
  }
  .button {
    width: 330px;
    height: 40px;
    background: @button-color;
    color: white;
    font-size: 15px;
    text-align: center;
    line-height: 40px;
    border-radius: 20px;
  }
}
</style>
