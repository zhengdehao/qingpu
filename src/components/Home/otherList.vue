<template>
  <div class="otherBox">
    <van-cell :title="hometitle" is-link value="查看全部" :border="false" />
    <div class="otheritemBox">
      <ul class="otherListUl">
        <li v-for="item in homeListData" @click="toDetail(item.type, item)">
            <img :src="item.bgImg" alt="">
          <p>{{ item.title }}</p>
          <p v-if="item.type == 0">{{ item.price }}起</p>
          <p v-else-if="item.type == 1">{{ item.price }}起</p>
          <p v-else-if="item.type == 4">￥{{ item.price }}起</p>
          <aside v-if="item.type == 2">{{ item.provinceName }}</aside>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent ({
  props: ["hometitle","homeListData"],

  methods: {
    toDetail(type:Number, item: any) {
      if(type == 1){
        this.$router.push({
          name: "homeDetail",
          params: { homeDetailId: item.id}
        });
      }else if (type == 2){
        this.$router.push({
          name: "tourDetail",
          params: { tourDetailId: item.id}
        });
      }else if (type == 3){
        console.log("type3");
      }else if (type == 4){
        console.log("type4");
      }
    }
  }
});
</script>
<style lang='less' scoped>
.otherBox {
  margin-bottom: 38px;
  .van-cell--clickable {
    font-size: 16px;
    padding: 0;
    padding-right: 15px;
  }
  .otheritemBox {
      overflow: auto;
        &::-webkit-scrollbar {
        display: none;
      }
    .otherListUl {
        height: 166px;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 17px;
      li {
        width: 167px;
        height: 166px;
        margin-right: 10px;
        margin-left: 2px;
        border-radius: 5px;
        position: relative;
        img {
          width: 167px;
          height: 112px;
          border-radius: 5px;
        }
        p:nth-of-type(1) {
          height: 30px;
          line-height: 15px;
          font-size: 12px;
        }
        p:nth-of-type(2) {
          margin-top: 7px;
          height: 10px;
          line-height: 10px;
          font-size: 10px;
          color: #5F5F5F;
        }
        aside {
          width: 44px;
          height: 23px;
          background: #29A2B5;
          position: absolute;
          top: 10px;
          right: 10px;
          border-radius: 5px;
          color: #fff;
          font-size: 9px;
          text-align: center;
          line-height: 23px;
        }
      }
    }
  }
}
</style>
