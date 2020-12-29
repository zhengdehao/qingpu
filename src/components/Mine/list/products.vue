<template>
  <!-- 臻品订单 -->
  <div class="products">
    <commhead class="fath"/>
    <div :class="[number>=50?'mypage-tip':'mypage-sco']">臻品订单</div>
    <div class="promain">
      <h1>臻品订单</h1>
      <van-tabs v-model="active" color="#39828C">
        <van-tab title="全部">
          <notravel />
        </van-tab>
        <van-tab title="待付款">
          <notravel />
        </van-tab>
        <van-tab title="待发货">
          <notravel />
        </van-tab>
        <van-tab title="待收货">
          <notravel />
        </van-tab>
        <van-tab title="待评价">
          <notravel />
        </van-tab>
      </van-tabs>
    </div>
    <van-button type="primary" to="/best" size="large" color="#39828C">去看看</van-button>
  </div>
</template>

<script lang="ts">
//引入头部导航条
import commhead from "./commhead.vue";
import notravel from "../order/notravel.vue";
export default {
  data() {
    return {
      number:0,
      active: 0,
    };
  },

  components: {
    commhead,
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

.products {
  padding-top: 50px;
  .fath {
    position: fixed;
  }
  .promain {
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
