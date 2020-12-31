<template>
  <div class="hasproducts">
    <van-card
      v-for="item in proList"
      :key="item.thumb"
      :num="item.num"
      :price="item.price"
      :title="item.title"
      :thumb="item.thumb"
    />
  </div>
</template>

<script>
import { defineComponent,ref,reactive } from "vue";
export default {
  setup() {
    const proList = reactive([
      {
        title:"青普文化行馆·扬州瘦西湖",
        num:1,
        price:2088,
        thumb:"http://42.192.155.18:3180/images/home/holiday_04.jpg"
      },
      {
        title:"青普文化行馆·苏州木渎",
        num:1,
        price:1488,
        thumb:"http://42.192.155.18:3180/images/home/holiday_05.jpg"
      },
      {
        title:"青普文化行馆·黄山秀里",
        num:1,
        price:1286,
        thumb:"http://42.192.155.18:3180/images/home/holiday_01.jpg"
      },
      {
        title:"青普文化行馆·八达岭瑞云",
        num:1,
        price:888,
        thumb:"http://42.192.155.18:3180/images/home/holiday_02.jpg"
      },
      {
        title:"青普文化行馆·丽江白沙",
        num:1,
        price:1988,
        thumb:"http://42.192.155.18:3180/images/home/holiday_06.jpg"
      },
      {
        title:"青普文化行馆·南靖土楼",
        num:1,
        price:2088,
        thumb:"http://42.192.155.18:3180/images/home/holiday_03.jpg"
      }
    ])

    return { proList }
  }
};
</script>
<style lang='less' scoped>
.hasproducts{
  margin-bottom: 60px;
}
</style>
