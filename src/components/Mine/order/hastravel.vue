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
        title:"hahaha",
        num:2,
        price:3000,
        thumb:"https://img.yzcdn.cn/vant/ipad.jpeg"
      },
      {
        title:"hahaha",
        num:2,
        price:3000,
        thumb:"https://img.yzcdn.cn/vant/ipad.jpeg"
      },
      {
        title:"hahaha",
        num:2,
        price:3000,
        thumb:"https://img.yzcdn.cn/vant/ipad.jpeg"
      },
      {
        title:"hahaha",
        num:2,
        price:3000,
        thumb:"https://img.yzcdn.cn/vant/ipad.jpeg"
      },
      {
        title:"hahaha",
        num:2,
        price:3000,
        thumb:"https://img.yzcdn.cn/vant/ipad.jpeg"
      },
      {
        title:"hahaha",
        num:2,
        price:3000,
        thumb:"https://img.yzcdn.cn/vant/ipad.jpeg"
      },
      {
        title:"hahaha",
        num:2,
        price:3000,
        thumb:"https://img.yzcdn.cn/vant/ipad.jpeg"
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
