<template>
  <banner :bannerList="bannerList" />
  <div id="firstBox">
    <span class="hotspan" :border="false">热门目的地</span>
    <hotList />
    <homeList />
    <otherList  :hometitle="homeTitle[0]" />
    <otherList  :hometitle="homeTitle[1]" />
    <otherList  :hometitle="homeTitle[2]" />
    <otherList  :hometitle="homeTitle[3]" />
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
import { getBannerApi } from "../../../utils/api";

export default defineComponent ({
  data() {
    return {
      bannerList: []
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
    this.msg();
    this.getBanner();
  },
  methods: {
    msg() {
      // Toast('提示内容');
      console.log(111);
    } ,
    async getBanner () {
      const res = await getBannerApi();
      this.bannerList = res.result.list;
    }
  }
});
</script>

<style lang="less" scoped>
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
}

</style>
