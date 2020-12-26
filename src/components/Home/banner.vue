<template>
  <van-swipe class="my-swipe" :autoplay="2000"  @change="onChange">
    <van-swipe-item v-for="item in bannerList" :key="item">
      <img :src="item" alt="">
    </van-swipe-item>
    <template #indicator>
      <progress class="custom-indicator" :value="((current + 1) / 4) * 100" max="100"></progress>
    </template>
  </van-swipe>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue';
export default defineComponent ({
  props: ["bannerList"],
  setup() {
    const current = ref(0);
    const onChange = (index) => {
      current.value = index;
    }

    return { current, onChange }
  }
})
</script>

<style lang="less" scoped>
 .my-swipe .van-swipe-item {
   width: 100%;
   height: 258px;
   img {
    width: 100%;
    height: 100%;
   }
}
.van-swipe__indicators {
  width: 100%;
  height: 30px;
}
.van-swipe__indicator {
  width: 100px;
  height: 30px;
}
.custom-indicator {
  width: 100%;
  height: 3px;
  position: absolute;
  bottom: 0px;
  border: none;
  background: white;
}
progress::-webkit-progress-value {
  background: #39828c;
}
progress::-webkit-progress-bar {
  background: white;
}
</style>
