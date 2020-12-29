<template>
  <!-- 设置页面 -->
  <div class="set">
    <commhead class="fath"/>
    <div :class="[number>=50?'mypage-tip':'mypage-sco']">设置</div>
    <div class="setmain">
      <h1>设置</h1>
      <ul>
      <router-link
        tag="li"
        v-for="item in memberList"
        :key="item.icon"
        :to="item.url"
        class="lili"
      >
        <p>{{ item.title }}</p>
        <p><van-icon :name="item.name" /></p>
      </router-link>
    </ul>
    <van-cell title="退出登录" @click="tip"/>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent,ref,reactive } from "vue";

//引入头部导航条
import commhead from "./commhead.vue";

import { Dialog } from 'vant';
export default {
  data() {
    return {
      number:0,
      memberList: [
        {
          title: "管理收货地址",
          name: "arrow",
          url: "/address"
        },
        {
          title: "推送通知",
          name: "arrow",
          url: "/notice"
        },
        {
          title: "关于我们",
          name: "arrow",
          url: "/about"
        }
      ]
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
    },
    tip() {
      Dialog.confirm({
        // title: '标题',
        message: '真的要退出吗？',
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    }
    
  }
}
</script>
<style lang='less' scoped>
@import "../../../assets/styles/style.less";

.set {
  padding-top: 50px;
  .fath {
    position: fixed;
  }
  .setmain {
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
  ul {
    width: 325px;
    margin: 0 auto;
    .lili {
      width: 100%;
      height: 92px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #e8e8e8;
      font-size: 19px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #333333;
      p{
        align-self: center;
        &:nth-of-type(2){
          font-size: 27px;
        }
      }
    }
  }
  .van-cell {
    height: 92px;
    font-size: 19px;
    padding: 25px;
  }
}
</style>
