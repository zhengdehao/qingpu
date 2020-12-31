<template>
  <div class="homeListBox">
    <van-cell title="当季主题推荐" is-link  :border="false" class="otherTitle"/>
    <div class="itemBox">
      <ul class="homeListUl">
        <li @click="toTheme(1)"><img src="../../assets/images/jiujiu/home01.jpg" alt=""></li>
        <li @click="toTheme(2)"><img src="../../assets/images/jiujiu/home02.jpg" alt=""></li>
      </ul>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent ({
  methods: {
    toTheme(index:any) {
      if(index == 1){
      this.$router.push("/themelist01");
      }else{
      this.$router.push("/themelist02");
      }
    }
  }
});
</script>
<style lang='less' scoped>
@import "../../assets/styles/jiujiu.less";
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
      margin-left: 3px;
      border-radius: 5px;
      img {
        width: 334px;
        height: 175px;
        border-radius: 5px;
      box-shadow: 0 0 3px 0;
      }
    }
  }
}
</style>
