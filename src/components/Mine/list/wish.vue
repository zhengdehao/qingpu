<template>
  <div class="wish">
    <commhead class="fath"/>
    <div :class="[number>=50?'mypage-tip':'mypage-sco']">购物车</div>
    <div class="wishmain">
      <h1>购物车</h1>
      <!-- <nowish /> -->
      <haswish />
    </div>
    <van-button type="primary" to="/best" size="large" color="#39828C">去看看</van-button>
  </div>
</template>

<script lang="ts">
//引入头部导航条
import commhead from "./commhead.vue";
import nowish from "../wish/nowish.vue";
import haswish from "../wish/haswish.vue";
export default {
  data() {
    return {
      number:0,
    };
  },

  components: {
    commhead,
    nowish,
    haswish
  },

  computed: {},

  mounted() {
    window.addEventListener("scroll", this.handleScroll); 
  },
  

  methods: {
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop;
      this.number = scrollTop;
    }
  }
};
</script>
<style lang='less' scoped>
@import "../../../assets/styles/style.less";

.wish {
  padding-top: 50px;
  .fath {
    position: fixed;
  }
  .wishmain {
    h1 {
      padding: 0 25px;
      margin-top: 46px;
      height: 30px;
      font-size: 31px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #333333;
      margin-bottom: 20px;
    }
  }
  .van-button--large {
    position: fixed;
    bottom: 0;
    left: 0;
  }
}
</style>
