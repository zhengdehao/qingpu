<template>
  <!-- 优惠券页面 -->
  <div class="cheap">
    <commhead class="fath"/>
    <div :class="[number>=50?'mypage-tip':'mypage-sco']">优惠券</div>
    <div class="cheamain">
      <h1>优惠券</h1>
      <van-tabs v-model="active" color="#39828C">
        <van-tab title="未使用">
          <div class="readcode">
            <van-cell-group>
              <van-field
                v-model="value1"
                clearable
                placeholder="请输入优惠券"
              />
            </van-cell-group>
            <van-button type="primary" round color="#DEDBDE">兑换</van-button>
          </div>
          <nocheap />
        </van-tab>
        <van-tab title="已使用">
          <nocheap />
        </van-tab>
        <van-tab title="已失效">
          <nocheap />
        </van-tab>
      </van-tabs>
    </div>
    <van-button type="primary" @click="tips" size="large" color="#39828C">领取更多优惠券</van-button>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//引入头部导航条
import commhead from "./commhead.vue";
import nocheap from "./nocheap.vue";
import { Toast } from 'vant';
export default {
  data() {
    return {
      number:0,
      active: 0,
      value1: '',
    };
  },

  components: {
    commhead,
    nocheap
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
    tips() {
      Toast("哈哈哈哈哈抢完啦");
    }
  }
};
</script>
<style lang='less' scoped>
@import "../../../assets/styles/style.less";

.cheap {
  padding-top: 50px;
  .fath {
    position: fixed;
  }
  .cheamain {
    h1 {
      padding: 0 25px;
      margin-top: 46px;
      height: 30px;
      font-size: 31px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #333;
      margin-bottom: 20px;
    }
    .readcode{
      padding: 0 25px 15px;
      display: flex;
      justify-content: space-between;
      .van-button {
        width: 85px;
        height: 30px;
      }
    }
    .van-cell-group{
      // padding-left: 15px;
      .van-field {
        width: 165px;
      }
    }
    
  }
  .van-button--large {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
