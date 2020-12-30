<template>
  <div class="address">
    <commhead class="fath"/>
    <div :class="[number>=50?'mypage-tip':'mypage-sco']">地址管理</div>
    <div class="addressmain">
      <h1>地址管理</h1>
      <!-- 没有地址 -->
      <!-- <noaddress /> -->
      <!-- 有地址 -->
      <hasaddress />
    </div>
    <van-button type="primary" to="/addressEdit" size="large" color="#39828C">添加地址</van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref,reactive } from "vue";
import commhead from "../list/commhead.vue";
import noaddress from "./noaddress.vue";
import hasaddress from "./hasaddress.vue";
export default {
  data() {
    return {
      number:0,
    };
  },
  components: {
    commhead,
    noaddress,
    hasaddress
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
.address {
  padding-top: 50px;
  .fath {
    position: fixed;
  }
  .addressmain {
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
