<template>
  <div class="otherBox">
    <van-cell :title="hometitle" is-link value="查看全部" :border="false" />
    <div class="otheritemBox">
      <ul class="otherListUl">
        <li v-for="item in homeListData">
            <img :src="item.bgImg" alt="">
          <p>{{ item.title }}</p>
          <p v-if="item.type == 0">{{ item.price }}起</p>
          <p v-else-if="item.type == 1">￥{{ item.price }}起</p>
          <p v-else-if="item.type == 4">￥{{ item.price }}起</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent ({
  props: ["hometitle","homeListData"]
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
        border-radius: 3px;
        img {
          width: 167px;
          height: 112px;
          border-radius: 3px;
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
      }
    }
  }
}
</style>
