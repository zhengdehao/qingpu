<template>
  <div class="activityList">
    <h3>活动专题</h3>
    <div class="imglist">
      <ul>
        <li v-for="item in imgList" :key="item">
          <img :src="item" alt="" style="height:100%;width:100%">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
export default {
  props: {
    imgList: Array
  },
  mounted() {
    new BetterScroll(".imglist", {
      scrollX: true,
      scrollY: false,
      pullUpLoad: true,
      click: true
    });
  }
};
</script>
<style lang='less' scoped>
.activityList {
  margin-bottom: 50px;
  h3 {
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 30px;
  }
  .imglist {
    width: 100%;
    overflow: hidden;
    ul {
      display: flex;
      width: 881px;
      justify-content: space-between;
      li {
        width: 209px;
        height: 107px;
      }
    }
  }
}
</style>
