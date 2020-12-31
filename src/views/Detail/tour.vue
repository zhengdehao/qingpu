<template>
  <div class="tour">
    <!-- 随滑动高度切换切换的两个不同的头部 -->
    <detail-header-one v-if="!flag" />
    <detail-header-two :themetitle="tourDetail.title" v-if="flag" />
    <!-- 臻品的详情内容 -->
    <div class="wrapper">
      <div>
        <detail-banner :bannerList="tourDetail.sliderImgs" />
        <div class="content">
          <h2>{{ tourDetail.title }}</h2>
          <div class="price"><span>{{ tourDetail.price }}</span><i>起</i></div>
          <p class="size">
            <span>{{ tourDetail.days }}</span>
            <i>
              <van-icon name="notes-o" size="22" color="#656565" />
            </i>
          </p>
          <div class="img">
            <img :src="tourDetail.bgImg" alt="" />
          </div>
          <div class="explain">
            <van-cell title="费用说明" is-link  @click="toTourCost" :detailTxt= "tourDetail.feeDes" />
            <van-cell title="注意事项" is-link  @click="toTourNotice" :detailTxt= "tourDetail.announcements" />
            <!-- <van-popup v-model:show="show">内容</van-popup> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <shop-bar />
</template>

<script lang="ts">
import DetailHeaderOne from "../../components/Common/DetailHeaderOne.vue";
import DetailHeaderTwo from "../../components/Common/DetailHeaderOne.vue";
import DetailBanner from "../../components/Common/DetailBanner.vue";
import ShopBar from "../../components/Home/tour/ShopBar.vue";
import BScroll from "better-scroll";
//引入api
import { postTourApi } from "../../utils/api";
export default {
  data() {
    return {
      flag: false as Boolean,
      tourDetail: {}
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
      this.flag = position.y < -180;
    });
    bs.on("pullingUp", async () => {
      await this.$nextTick();
      bs.refresh();
    });
    //请求人文知旅详情数据
    this.postTour();
  },

  methods: {
    //请求人文知旅详情数据
    async postTour() {
      const res = await postTourApi({ id:this.$route.params.tourDetailId });
      this.tourDetail = res.result[0];
    },
    //点击进入费用详情
    toTourCost() {
      this.$router.push("/tourcost");
    },
    //点击进入注意事项
    toTourNotice() {
      this.$router.push("/tournotice");
    },
    // toTourCos() {
    //   this.show = 
    // }
  },
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
      height: 100%;
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
