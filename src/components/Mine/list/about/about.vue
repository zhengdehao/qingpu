<template>
  <div class="notice">
    <commhead class="fath"/>
    <div :class="[number>=50?'mypage-tip':'mypage-sco']">关于我们</div>
    <div class="noticemain">
      <h1>关于我们</h1>
      <van-cell title="检查更新" is-link value="2.1.4" size="large" />
      <van-cell title="法律条款" is-link value="内容" size="large" />
    </div>
  </div>
</template>

<script>
import { defineComponent,ref,reactive } from "vue";

import commhead from "../commhead.vue";
export default {
  data() {
    return {
      number:0,
      checked: true,
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
.notice {
  padding-top: 50px;
  .fath {
    position: fixed;
  }
  .noticemain {
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
}
</style>
