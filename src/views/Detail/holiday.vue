<template>
<!-- ?????下来的padding-bottom有点问题 -->
<!--人文假日的详情页面 -->
  <div class="holiday">
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
                  <span>￥2088.00</span><i>起</i>
              </div>
              <p class="size">
                  <span>规格及数量选择规格及数量选择规格及数量选
                    择规格及数量选择规格及数量选择规格及数
                    规格及数量选择规格及数量选择量选择规格及数量选择</span>
                  <i>
                    <van-icon name="notes-o" size="22" color="#656565" />
                  </i>
              </p>
              <div class="img">
                <img src="http://42.192.155.18:3180/images/banner/banner_02.jpg" alt="">
              </div>
              <collapse/>
              <div class="path">
                 <img src="http://42.192.155.18:3180/images/banner/banner_02.jpg" alt="">
                 <div>
                   <p>
                     <h4>北京市</h4>
                     <h5>河北省张家桥口话来西安大家反馈</h5>
                   </p>
                   <van-icon name="phone-o" />
                 </div>
                 <div>
                   <p>
                     <h4>北京市</h4>
                     <h5>河北省张家桥口话来西安大家反馈</h5>
                   </p>
                   <van-icon name="flag-o" />
                 </div>
                 <div>
                   <p>
                     <h4>北京市</h4>
                     <h5>河北省张家桥口话来西安大家反馈</h5>
                   </p>
                   <van-icon name="bulb-o" />
                 </div>
              </div>
              <div class="select">
                <h4>规划您的假期旅程</h4>
                <h5>1.挑选入住环境</h5>

                <van-radio-group v-model="checked">
                  <div class="checkin">
                    <img src="http://42.192.155.18:3180/images/banner/banner_02.jpg" alt="">
                    <p>
                      <h5>清梦枕水大床房（双早）<van-icon name="arrow" /></h5>
                      <h6>房间景观,可享园景或是院子花园</h6>
                    </p>
                    <!-- 单选框的name在循环的时候，需要用index当值 -->
                      <van-radio name="0" checked-color="#388388"></van-radio>
                  </div>
                   <div class="checkin">
                    <img src="http://42.192.155.18:3180/images/banner/banner_02.jpg" alt="">
                    <p>
                      <h5>清梦枕水大床房（双早）<van-icon name="arrow" /></h5>
                      <h6>房间景观,可享园景或是院子花园</h6>
                    </p>
                    <!-- 单选框的name在循环的时候，需要用index当值 -->
                      <van-radio name="1" checked-color="#388388"></van-radio>
                  </div>
                   <div class="checkin">
                    <img src="http://42.192.155.18:3180/images/banner/banner_02.jpg" alt="">
                    <p>
                      <h5>清梦枕水大床房（双早）<van-icon name="arrow" /></h5>
                      <h6>房间景观,可享园景或是院子花园</h6>
                    </p>
                    <!-- 单选框的name在循环的时候，需要用index当值 -->
                      <van-radio name="2" checked-color="#388388"></van-radio>
                  </div>
               </van-radio-group>
              </div>   
              <p class="button">立即体验</p>   
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
      themeTitle: "青普文化馆~南靖土楼",
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
        probeType: 3,
      });
      bs.on("scroll", (position:any) => {
        this.flag = position.y < -180;
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
    font-size: 16px;
    font-weight: normal;
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
  .button{
    width: 330px;
    height: 40px;
    background: @button-color;
    color:white;
    font-size: 15px;
    text-align: center;
    line-height: 40px;
    border-radius: 20px;
  }
}
</style>
