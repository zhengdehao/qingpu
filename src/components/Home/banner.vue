<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>陈</van-swipe-item>
      <van-swipe-item>田</van-swipe-item>
      <van-swipe-item>小</van-swipe-item>
      <van-swipe-item>可</van-swipe-item>
      <van-swipe-item>爱</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent ({
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
});
</script>
<style lang='less' scoped>

  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
