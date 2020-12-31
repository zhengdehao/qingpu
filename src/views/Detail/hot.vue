<template>
  <van-icon name="arrow-left"  class="headarrows" v-show="!flag" @click="goback"/>
  <hot-header v-if="flag" :provinceName="provinceName" />
  <div class="wrapper">
    <div class="hotdetail">
      <h1>{{ provinceName }}</h1>
      <div class="content">
        <!-- 需要用v-if来判断有没有改省份的人文之旅-->
        <div class="holiday" v-if="detailList.holidayList">
          <h2 v-if="detailList.holidayList.length">人文假日</h2>
          <div
          v-for="item in detailList.holidayList"
          :key="item.id" class="detailboxx"
          @click="toholidaydetail(item)"
          >
            <img
              :src="item.bgImg"
              alt=""
            />
            <p>{{ item.price }}</p>
            <span>{{item.title}}</span>
          </div>
        </div>
        <div class="tour" v-if="detailList.tripList">
          <h2 v-if="detailList.tripList.length">人文知旅</h2>
          <ul>
            <li
            v-for="item in detailList.tripList"
            :key="item.id" class="detailboxx"
            @click="totripdetail(item)"
            >
              <img
                :src="item.bgImg"
                alt=""
              />
              <span>{{item.title}}</span>
              <p>{{ item.price }}</p>
            </li>
          </ul>
        </div>
        <div class="art" v-if="detailList.expList">
          <h2 v-if="detailList.expList.length">在地艺文体验</h2>
          <ul>
            <li
            v-for="item in detailList.expList"
            :key="item.id" class="detailboxx"
            @click="toexpdetail(item)"
            >
              <img
                :src="item.bgImg"
                alt=""
              />
              <span>{{ item.title }}</span>
            </li>
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
      // console.log(res.result);
      // console.log(res.result.holidayList.filter(item => item.provinceName == this.provinceName))
      this.detailList["holidayList"] = res.result.holidayList.filter(item => item.provinceName == this.provinceName);
      this.detailList["tripList"] = res.result.tripList.filter(item => item.provinceName == this.provinceName);
      this.detailList["expList"] = res.result.expList.filter(item => item.provinceName == this.provinceName);
    },
    //跳转详情
    toholidaydetail(item:any){
        this.$router.push({
          name: "homeDetail",
          params: { homeDetailId: item.id}
        });
    },
    totripdetail(item:any){
        this.$router.push({
          name: "tourDetail",
          params: { tourDetailId: item.id}
        })
    },
    toexpdetail(item:any){
        this.$router.push({
          name: "artdetail",
          params: { artId: item.id}
        });
    },
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
        padding: 0 10px;
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
.detailboxx {
  margin-bottom: 20px;
}
</style>
