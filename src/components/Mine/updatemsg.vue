<template>
  <!-- 臻品订单 -->
  <div class="updatemsg">
    <commhead class="fath"/>
    <div :class="[number>=50?'mypage-tip':'mypage-sco']">管理资料</div>
    <div class="updatemsgmain">
      <h1>管理资料</h1>
      <van-cell center title="头像" value="修改" label="内容" is-link />
      <van-cell center title="昵称" label="哈哈哈" />
      <van-cell center title="性别" :label="showSex" is-link @click="showPopup"/>
      <van-popup v-model:show="show" position="bottom" :style="{ height: '30%' }">
        <van-picker
          title="标题"
          :columns="columns"
          @confirm="onConfirm"
          @cancel="onCancel"
        />
      </van-popup>
    </div>
    <van-button type="primary" to="/best" size="large" color="#39828C">完成</van-button>
  </div>
</template>

<script lang="ts">
import { Toast } from 'vant';
//引入头部导航条
import commhead from "./list/commhead.vue";
import { defineComponent,ref,reactive } from "vue";

export default {
  setup() {
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    const columns = ['男', '女'];
    let showSex = ref("");
    const onConfirm = (value:any) => {
      showSex.value = value
      show.value = false;
    };
    const onCancel = () => {
      show.value = false;
    };
    
    return {
      show,
      showPopup,
      columns,
      onCancel,
      onConfirm,
      showSex
    };
  },
  data() {
    return {
      number:0
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
@import "../../assets/styles/style.less";

.updatemsg {
  padding-top: 50px;
  .fath {
    position: fixed;
  }
  .updatemsgmain {
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
  .van-cell {
    height: 92px;
    font-size: 19px;
    padding: 25px;
  }
}
</style>
