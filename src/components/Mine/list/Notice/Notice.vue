<template>
  <div class="notice">
    <commhead class="fath"/>
    <div :class="[number>=50?'mypage-tip':'mypage-sco']">通知管理</div>
    <div class="noticemain">
      <h1>通知管理</h1>
      <van-cell center title="允许青普向您发送通知" size="large" >
        <template #right-icon>
          <van-switch v-model="checked" size="24" />
        </template>
      </van-cell>
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
