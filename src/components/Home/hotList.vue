<template>
    <div class="hotBox">
      <ul class="hot" :style="{width: hotUlWidth}">
      <li v-for="item in hotList">
          <img src="" alt="">
          <p>{{ item.cityname }}</p>
          <p>￥{{ item.price }}起</p>
      </li>
    </ul>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent ({
  setup() {
    const hotList = [
      {
        cityname: "江苏",
        img: "图片",
        price: 1488
      },
      {
        cityname: "福建",
        img: "图片",
        price: 2088
      },
      {
        cityname: "云南",
        img: "图片",
        price: 1288
      },
      {
        cityname: "北京",
        img: "图片",
        price: 888
      },
      {
        cityname: "黄山",
        img: "图片",
        price: 1288
      }
    ];
    let hotUlWidth = hotList.length * 107;


    return { hotList, hotUlWidth };
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
