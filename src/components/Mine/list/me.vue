<template>
  <div class="me">
    <commhead class="fath"/>
    <div :class="[number>=50?'mypage-tip':'mypage-sco']">个人信息</div>
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
}
</style>
