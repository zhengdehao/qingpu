<template>
  <van-icon name="arrow-left"  class="headarrows" v-if="!flag" @click="goback"/>
  <hot-header v-show="flag" :provinceName="provinceName" />
  <div class="wrapper">
    <div class="hotdetail">
      <h1>{{ provinceName }}</h1>
      <div class="content">
        <!-- 需要用v-if来判断有没有改省份的人文之旅-->
        <div class="holiday">
          <h2>人文假日</h2>
          <div v-for="item in detailList.holidayList" :key="item.id">
            <img
              :src="item.bgImg"
              alt=""
            />
            <p>{{ item.price }}</p>
            <span>{{item.title}}</span>
          </div>
          <!-- <div>
            <img
              src="http://42.192.155.18:3180/images/banner/banner_02.jpg"
              alt=""
            />
            <p>¥1988.00起</p>
            <span>青普文化行馆·丽江白沙</span>
          </div>
        </div>
        <div class="tour"> -->
          <h2>人文知旅</h2>
          <ul>
            <li v-for="item in detailList.tripList" :key="item.id">
              <img
                :src="item.bgImg"
                alt=""
              />
              <span>{{item.title}}</span>
              <p>{{ item.price }}</p>
            </li>
            <!-- <li>
              <img
                src="http://42.192.155.18:3180/images/banner/banner_02.jpg"
                alt=""
              />
              <span>青普文化行馆·丽江白沙</span>
              <p>¥1988.00起</p>
            </li> -->
          </ul>
        </div>
        <div class="art">
          <h2>在地艺文体验</h2>
          <ul>
            <li v-for="item in detailList.expList" :key="item.id">
              <img
                :src="item.bgImg"
                alt=""
              />
              <span>{{ item.title }}</span>
            </li>
            <!-- <li>
              <img
                src="http://42.192.155.18:3180/images/banner/banner_02.jpg"
                alt=""
              />
              <span>青普文化行馆·丽江白沙</span>
            </li>
            <li>
              <img
                src="http://42.192.155.18:3180/images/banner/banner_02.jpg"
                alt=""
              />
              <span>青普文化行馆·丽江白沙</span>
            </li>
            <li>
              <img
                src="http://42.192.155.18:3180/images/banner/banner_02.jpg"
                alt=""
              />
              <span>青普文化行馆·丽江白沙</span>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import BScroll from "better-scroll";
import HotHeader from "../../components/Home/Hot/header.vue";
import { getHomeDetail, getHomeListApi } from "../../utils/api";
export default {
  props:["id"],
  data() {
    return {
      provinceName: "",
      flag: false as Boolean,
      detailList: {}
    };
  },

  components: {
    HotHeader,
  },

  computed: {},

  mounted() {
    this.getHotDetail();
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

  methods: {
    goback(){
      window.history.go(-1);
    },
    async getHotDetail() {
      const res = await getHomeDetail({id: this.id});
      this.provinceName =  res.result[0].provinceName;
    },
    async getDetailList() {
      let res = await getHomeListApi();
      // res = JSON.parse(JSON.stringify(res));
      console.log(res.result);
      console.log(res.result.holidayList.filter(item => item.provinceName == this.provinceName))
      this.detailList["holidayList"] = res.result.holidayList.filter(item => item.provinceName == this.provinceName);
      this.detailList["tripList"] = res.result.tripList.filter(item => item.provinceName == this.provinceName);
      this.detailList["expList"] = res.result.expList.filter(item => item.provinceName == this.provinceName);
      console.log(this.detailList);
    }
  },
  watch: {
    provinceName() {
      this.getDetailList();
    }
  }
};
</script>
<style lang='less' scoped>
.wrapper {
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: #333333;
}
.hotdetail {
  padding-top: 74px;
  padding-left: 16px;
  h1 {
    font-size: 24px;
  }
  .content {
    padding-left: 4px;
    padding-right: 18px;
    h2 {
      font-size: 18px;
      line-height: 70px;
    }
    .holiday {
      img {
        width: 335px;
        height: 270px;
        border-radius: 5px;
        margin-bottom: 5px;
      }
      p {
        font-size: 16px;
        font-weight: 600;
        line-height: 25px;
        padding-left: 6px;
      }
      span {
        display: block;
        font-size: 15px;
        line-height: 30px;
      }
    }
    .tour,
    .art {
      > ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          width: 158px;
          padding-bottom: 10px;
          img {
            width: 100%;
            height: 131px;
          }
          span {
            padding: 8px;
            display: block;
            font-size: 16px;
            font-weight: 600;
          }
          p {
            font-size: 12px;
            padding-left: 8px;
          }
        }
      }
    }
  }
}
.headarrows {
  width: 24px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  position: absolute;
  top: 0;
  left: 10px;
  z-index: 999;
}
</style>
