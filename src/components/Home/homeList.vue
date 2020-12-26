<template>
  <div class="homeListBox">
    <van-cell title="当季主题推荐" is-link value="查看全部" />
    <div class="itemBox">
      <ul class="homeListUl">
        <li v-for="item in homeListData">
            <img :src="item.bgImg" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent ({
  props: ["homeListData"]
});
</script>
<style lang='less' scoped>
.van-cell--clickable {
  font-size: 16px;
  padding: 0;
  padding-right: 15px;
}
.homeListBox {
  margin-bottom: 38px;
}
.itemBox {
    overflow: auto;
      &::-webkit-scrollbar {
      display: none;
    }
  .homeListUl {
      height: 175px;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 17px;
    li {
      width: 334px;
      height: 175px;
      margin-right: 10px;
      border-radius: 3px;
      img {
        width: 334px;
        height: 175px;
        border-radius: 3px;
      }
    }
  }
}
</style>
