<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>陈</van-swipe-item>
    <van-swipe-item>田</van-swipe-item>
    <van-swipe-item>小</van-swipe-item>
    <van-swipe-item>可</van-swipe-item>
    <van-swipe-item>爱</van-swipe-item>
  </van-swipe>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent ({
  data() {
    return {};
  },

  components: { },

  computed: {},

  mounted() {},

  methods: {}
})
</script>
<style lang="less" scoped>
 .my-swipe .van-swipe-item {
   width: 100%;
   height: 258px;
   background: pink;
   text-align: center;
   line-height: 258px;
}
.van-swipe__indicators {
  width: 100%;
  height: 30px;
}
.van-swipe__indicator {
  width: 100px;
  height: 30px;
}
</style>
