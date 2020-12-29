<template>
  <div class="haswish">
    
    <van-swipe-cell v-for="item in proList">
      <template #left>
        <van-button square type="primary" text="选择" />
      </template>
      <van-card
        
        :key="item.thumb"
        :num="item.num"
        :price="item.price"
        :title="item.title"
        :thumb="item.thumb"
      />
      <template #right>
        <van-button square type="danger" text="删除" />
      </template>
    </van-swipe-cell>
    <!-- <van-swipe-cell>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        class="goods-card"
        thumb="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell> -->

  </div>
</template>

<script>
import { defineComponent,reactive } from "vue";
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
    ]);
    return { 
      proList
    };
  }
};
</script>
<style lang='less' scoped>
.haswish{
  margin-bottom: 60px;
  .goods-card {
    margin: 0;
    background-color: white;
  }

  .van-button--danger::before {
    height: 100%;
    background:pink!important;
  }
}

</style>
