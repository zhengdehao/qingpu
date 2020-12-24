<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
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
    const icon = {
      active: 'https://img.yzcdn.cn/vant/user-active.png',
      inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
    };
    return {
      icon,
      active,
    };
  },
})
</script>
<style lang="less" scoped></style>
