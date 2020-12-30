<template>
  <!-- 臻品订单 -->
  <div class="login">
    <commhead class="fath"/>
    <div :class="[number>=50?'mypage-tip':'mypage-sco']">登录</div>
    <div class="loginmain">
      <h1>登录</h1>
      <van-cell-group>
      <van-field
        v-model="phone"
        required
        label="手机号"
        placeholder="请输入手机号"
        :error-message="errmsg"
        @blur="phonemsg"
      />
      <van-field
        v-model="code"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button size="small" type="primary" :disabled="disabled" color="#39828C" @click="getCode">发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    </div>
    <van-button type="primary" :disabled="disabled" size="large" color="#39828C" @click="loginInto">登录</van-button>
  </div>
</template>

<script lang="ts">
//引入头部导航条
import commhead from "./list/commhead.vue";
import { defineComponent,ref,reactive } from "vue";
import { getCodeApi, loginIntoApi } from "../../utils/api"
export default {
  data() {
    return {
      number:0,
      errmsg: "",
      phone: "",
      code: "",
      disabled: false
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
    phonemsg() {
      let reg = /^1\d{10}$/;
      let tel = this.phone;
      // console.log(reg.test(tel));
      if(reg.test(tel)){
        this.errmsg = "";
        this.disabled = false;
      }else {
        this.errmsg = "手机号码格式错误";
        this.disabled = true;
      }
    },
    async getCode() {
      const res = await getCodeApi({phone: this.phone});
      // console.log(res);
    },
    async loginInto() {
      // console.log(1)
      const res = await loginIntoApi({phone: this.phone, code: this.code});
      
      console.log(res);
      localStorage.setItem("phone",res.phone);

      this.$router.push({path: "/mine"});
    }
  }
};
</script>
<style lang='less' scoped>
@import "../../assets/styles/style.less";

.login {
  padding-top: 50px;
  .fath {
    position: fixed;
  }
  .loginmain {
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
