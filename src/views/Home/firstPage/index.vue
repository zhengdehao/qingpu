<template>
  <banner :bannerList="bannerList" />
  <div id="firstBox">
    <!-- 热门目的地 -->
    <span class="hotspan" :border="false">热门目的地</span>
    <hotList :homeHotList="homeHotList" />
    <!-- 主题推荐 -->
    <homeList :homeListData="homeHotList" />
    <!-- 人文假日 -->
    <otherList :hometitle="homeTitle[0]" :homeListData="homeHolidayList" />
    <!-- 人文知旅 -->
    <otherList :hometitle="homeTitle[1]" :homeListData="homeTripList" />
    <!-- 在地艺文体验 -->
    <otherList :hometitle="homeTitle[2]" :homeListData="homeTripList" />
    <!-- 溯心 -->
    <otherList :hometitle="homeTitle[3]" :homeListData="homeTripList" />
  </div>
</template>

<script>
// 引入组件
import Banner from '../../../components/Home/banner.vue';
import hotList from '../../../components/Home/hotList.vue';
import homeList from '../../../components/Home/homeList.vue';
import otherList from '../../../components/Home/otherList.vue';
//vue解构
import { defineComponent, reactive } from 'vue';
//引入api
import { getBannerApi, getHomeListApi } from "../../../utils/api";
import { Toast } from 'vant';

export default defineComponent ({
  data() {
    return {
      //轮播图
      bannerList: [],
      //热门目的地
      homeHotList: [],
      //人文知旅
      homeTripList: [],
      //人文假日
      homeHolidayList: []
    }
  },

  setup() {
    const homeTitle = reactive(["人文假日", "人文知旅", "在地艺文体验", "溯心"]);

    return { homeTitle };
  },

  components: {
    Banner,
    hotList,
    homeList,
    otherList
  },
  
  mounted() {
    this.toas();
    this.getBanner();
    this.getHomeList();
  },
  methods: {
    //请求首页轮播图
    async getBanner () {
      const res = await getBannerApi();
      this.bannerList = res.result.list;
    },
    //请求首页渲染列表
    async getHomeList () {
      const res = await getHomeListApi();
      //热门目的地
      this.homeHotList = res.result.hotList;
      //人文假日
      this.homeHolidayList = res.result.holidayList;
      //人文知旅
      this.homeTripList = res.result.tripList;

      console.log( res.result);
    },
    //显示轻提示
    toas() {
      let toastFlag = sessionStorage.getItem('toastFlag');
      if(!toastFlag) {
        Toast({
          message: "项目名称：青普\n\n项目参与人员\n郑德豪\n邱根国\n陈田\n吕慧笑\n竹文倩\n戴泓程\n\n以上排名不分先后顺序",
          icon: 'like-o',
          duration: 5000
        });
        sessionStorage.setItem('toastFlag', '1');
      }
    }
  }
});
</script>

<style lang="less" scoped>
@import "../../../assets/styles/jiujiu.less";
#firstBox {
  color: #000;
  font-family: "PingFang-SC-Regular";
  padding-left: 14px;
  .hotspan {
    display: block;
    line-height: 15px;
    margin: 34px 0 19px 0;
    font-size: 16px;
    font-weight: bold;
  }
  //轻提示


}

</style>
