<template>
  <!-- 添加常用信息 -->
  <div class="me">
    <commhead class="fath"/>
    <div :class="[number>=50?'mypage-tip':'mypage-sco']">常用信息</div>
    <div class="memain">
      <h1>常用信息</h1>
      <van-tabs v-model="active" color="#39828C">
        <van-tab title="人员信息"></van-tab>
        <van-tab title="签证"></van-tab>
      </van-tabs>
    </div>
    <!-- <van-button type="primary" size="large" color="#39828C">添加</van-button> -->
  </div>
</template>

<script lang="ts">
//引入头部导航条
import commhead from "./commhead.vue";
export default {
  data() {
    return {
      number:0,
    };
  },

  components: {
    commhead
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

.me {
  padding-top: 50px;
  .fath {
    position: fixed;
  }
  .memain {
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
