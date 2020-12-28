<template>
  <van-swipe class="my-swipe" :autoplay="3000" @change="onChange">
    <van-swipe-item>陈</van-swipe-item>
    <van-swipe-item>田</van-swipe-item>
    <van-swipe-item>小</van-swipe-item>
    <van-swipe-item>可</van-swipe-item>
    <template #indicator>
      <progress class="custom-indicator" :value="((current + 1) / 4) * 100" max="100"></progress>
    </template>
  </van-swipe>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      current: 0,
    };
  },

  components: {},

  computed: {},

  mounted() {},

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
}
.my-swipe .van-swipe-item {
  width: 100%;
  height: 260px;
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
