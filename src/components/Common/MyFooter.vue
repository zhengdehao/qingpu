<template>
  <div>
    <van-tabbar v-model="active" :placeholder ="true">
      <van-tabbar-item icon="home-o" to="/firstpage">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/find">发现</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/best">臻品</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue';
export default defineComponent ({
  data() {
    return {};
  },
  setup() {
    const active = ref(0);
    return { active };
  },
})
</script>
<style lang="less" scoped></style>
