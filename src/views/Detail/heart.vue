<template>
  <!--溯心的详情页面 -->
  <div class="holiday">
    <!-- 随滑动高度切换切换的两个不同的头部 -->
    <detail-header-one v-if="!flag"></detail-header-one>
    <detail-header-two :themetitle="detailData.title" v-if="flag"></detail-header-two>
    <!-- 溯心的详情内容 -->
    <div class="wrapper">
      <div>
        <detail-banner :bannerList="detailData.sliderImgs" />
        <div class="content">
          <h2>{{ detailData.title }}</h2>
          <p class="address">
            <span>{{ detailData.address }}</span>
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
            <div v-for="item in detailData.size" :key="item.roomName">
              <img
                :src="item.img"
                alt=""
              />
              <div class="roomsize">
                <h3>{{ item.roomName }}</h3>
                <h4>{{ item.roomSize }}</h4>
                <h4>{{ item.bedSize }}</h4>
                <h4>{{ item.peopleNumber }}</h4>
                <h5><span>{{ item.price }}</span> 起/晚</h5>
              </div>
              <p class="button">预订</p>
            </div>
          </div>

          <h6>住宿介绍</h6>
          <!-- 住宿介绍的html存在这里 -->
          <div id="detailbox">
              <div id="detailboxx">
                <div id="detailhtmlbox">
                    <div v-html="detailData.des" id="html"></div>
                </div>
              </div>
            </div>
          <!-- 路线 -->
          <div class="path">
            <!-- <p class="title">{{ detailData.path.title }}</p>
            <p v-for="item in detailData.path.way" :key="item">{{ item }}</p> -->
            <img :src="detailData.gpsImg" v-if="detailData.gpsImg" />
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
//引入api
import { postSuxinDetailApi } from "../../utils/api";

export default {
  setup() {
    const checked = ref("0");
    return { checked };
  },
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
    bs.on("scroll", (position:any) => {
      this.flag = position.y < -180;
    });
    bs.on("pullingUp", async () => {
      await this.$nextTick();
      bs.refresh();
    });
    //请求溯心详情数据
    this.postSuxinDetail();
  },

  methods: {
    //请求详情页数据
    async postSuxinDetail(){
      const res = await postSuxinDetailApi({ id:this.$route.params.heartId });
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
  
   #detailbox #detailboxx #detailhtmlbox #html {
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
