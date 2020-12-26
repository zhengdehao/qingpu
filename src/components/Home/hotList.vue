<template>
    <div class="hotBox">
      <ul class="hot">
      <li v-for="item in homeHotList" :key="item.id">
          <img :src="item.bgImg" alt="">
          <p>{{ item.provinceName }}</p>
          <p>￥{{ item.price }}起</p>
      </li>
    </ul>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent ({
  props: {
    homeHotList: {
      type:Array,
      required: true
    }
  }
});
</script>

<style lang='less' scoped>
.hotBox {
  overflow: auto;
    &::-webkit-scrollbar {
    display: none;
  }
}
.hot {
  height: 200px;
  margin-bottom: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  li {
    width: 107px;
    height: 185px;
    margin-right: 10px;
    border-radius: 3px;
    img {
      width: 107px;
      height: 145px;
      border-radius: 3px;
      border: none;
      margin-bottom: 11px;
    }
    p:nth-of-type(1) {
      height: 12px;
      line-height: 12px;
      font-size: 12px;
    }
    p:nth-of-type(2) {
      margin-top: 7px;
      height: 10px;
      line-height: 10px;
      font-size: 10px;
      color: #5F5F5F;
    }
  }
}
</style>
