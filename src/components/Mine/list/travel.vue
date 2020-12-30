<template>
  <!-- 行程订单 -->
  <div class="travel">
    <commhead class="fath"/>
    <div :class="[number>=50?'mypage-tip':'mypage-sco']">行程订单</div>
    <div class="mainlist">
      <h1>行程订单</h1>
      <notravel />
      <!-- <hastravel /> -->
    </div>
    <van-button type="primary" to="/" size="large" color="#39828C">去看看</van-button>
  </div>
</template>

<script lang="ts">
//引入头部导航条
import commhead from "./commhead.vue";
import hastravel from "../order/hastravel.vue";
import notravel from "../order/notravel.vue";
export default {
  data() {
    return {
      number:0,
    };
  },

  components: {
    commhead,
    hastravel,
    notravel
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

.travel {
  padding-top: 50px;
  .fath{
    position: fixed;
  }
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
  .van-button--large {
    position: fixed;
    bottom: 0;
    left: 0;
  }
}
</style>
