<template>
  <van-swipe class="my-swipe" :autoplay="3000" @change="onChange">
    <van-swipe-item v-for="(item, index) in bannerList" :key="item">
      <img :src="item" alt="">
    </van-swipe-item>
    <template #indicator v-if="bannerList">
      <progress class="custom-indicator" :value="((current + 1) / bannerList.length) * 100" max="100"></progress>
    </template>
  </van-swipe>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: ["bannerList"],
  data() {
    return {
      current: 0
    }
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
});
</script>
<style lang="less" scoped>
.my-swipe{
  position: relative;
  img {
    min-width: 100%;
    height: 100%;
  }
}
.my-swipe .van-swipe-item {
  width: 100%;
  height: 260px;
}
.van-swipe__indicators {
  width: 100%;
  height: 30px;
}
.van-swipe__indicator {
  width: 100px;
  height: 30px;
}
.custom-indicator{
  width: 100%;
  height: 3px;
  position: absolute;
  bottom: -1px;
  background: white;
}
progress::-webkit-progress-value {
    background: #25969D;
}
progress::-webkit-progress-bar {
    background: white;
}
</style>
