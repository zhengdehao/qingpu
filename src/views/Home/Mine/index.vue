<template>
<div class="mypage">
  <div :class="[number>=50?'mypage-tip':'mypage-sco']">我的</div>
    <template v-if="isLogin">
      <personal :userInfo="userInfo" />
    </template>
    <template v-else-if="!isLogin">
      <unpersonal />
    </template>

    <list />
  <!-- </div> -->
</div>
  
</template>

<script lang="ts">
//引入我的页面，头部个人信息组件
import personal from "../../../components/Mine/personal.vue";
import unpersonal from "../../../components/Mine/unpersonal.vue";
//引入列表组件
import list from "../../../components/Mine/list.vue";
import { defineComponent } from 'vue';
import { Toast } from 'vant';
import { getUserInfoApi } from "../../../utils/api";
export default defineComponent ({
  data() {
    return {
      number:0,
      isLogin: false,
      userInfo: {}
    };
  },

  components: {
    personal,
    unpersonal,
    list
    // member
    // myfooter
  },

  computed: {

  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    console.log(1);
    this.isLoginChange();
    this.getUserInfo();
  },

  methods: {
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop;
      this.number = scrollTop;
    },
    isLoginChange() {
      if(localStorage.getItem("phone")) { this.isLogin = true }
      else { this.isLogin = false}
    },
    async getUserInfo() {
      if(this.isLogin) {
        console.log(localStorage.getItem("phone"));
        const res = await getUserInfoApi({phone: localStorage.getItem("phone")});
        console.log(res);
        this.userInfo = res.result[0];
      }
    }
  },
  unmounted() {

  },
});
</script>
<style lang="less" scoped>
@import "../../../assets/styles/style.less";
// .tip {
//     width: 100%;
//     height: 49px;
//     font-size: 22px;
//     position: fixed;
//     top: 0;
//     left: 0;
//     background: #fff;
//     line-height: 50px;
//     text-align: center;
//     border-bottom: 1px solid rgb(240, 239, 239);
//     z-index: 99;
//     font-weight: 600;
//   }
//   .sco {
//     display: none;
//   }
.page {
  .mypage-tip();
  .mypage-sco();
}
</style>
