<template>
  <header class="best-header">
    <van-nav-bar
      @click-right="onClickRight"
    >
      <template #right>
        <span class="iconfont icon-shoucangxinyuandanyuanwangqingdantuijian" style="font-size: 22px;font-weight:900;margin-right:16px"></span>
      </template>
    </van-nav-bar>
    <h2 class="best-title">臻品</h2>
    <van-tabs v-model="active" sticky line-width="30px">
      <van-tab v-for="( item, index ) in navList" :key="index" :title="item.title" :to="item.path">
      </van-tab>
    </van-tabs>
  </header>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, watch } from 'vue';
export default defineComponent ({
  setup() {
    let active = ref(0);
    // let navList = ['推荐','文化艺术','好茶美器','美居生活','在地风物','在地风物','在地风物','在地风物'];
    let navList = reactive(
      [
        {
          title:'推荐',
          path: "/best/recommend"
        },
        {
          title:'文化艺术',
          path: "/best/recommend"
        },
        {
          title:'好茶美器',
          path: "/best/recommend"
        },
        {
          title:'美居生活',
          path: "/best/recommend"
        },
        {
          title:'在地风物',
          path: "/best/recommend"
        },
        {
          title:'原创臻品',
          path: "/best/recommend"
        },
        {
          title:'青普甄选',
          path: "/best/recommend"
        }
      ]
    );





    return { navList, active };
  }
});
</script>

<style lang="less" scoped>
.best-title {
  font-size: 24px;
  padding-left: 16px;
  line-height: 24px;
  margin-top: 30px;
  margin-bottom: 18px;
}


</style>
