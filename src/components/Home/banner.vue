<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item><img :src="url" alt=""></van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>

export default {
  data() {
    return {
      
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='less' scoped>

  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 258.5px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
