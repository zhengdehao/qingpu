<template>
  <div class="shopbar">
    <div>
      <div @click="service">
        <span><van-icon name="service-o" /></span>
        <p>客服</p>
      </div>
      <div>
        <span><van-icon name="shopping-cart-o" /></span>
        <p>购物车</p>
      </div>
      <div class="shopbutton">
        <div class="addCar">+ 购物车</div>
        <div class="buy">立即购买</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
//弹出框函数
import { Dialog } from "vant";
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    service() {
      // 有确认和取消键的提示框
      Dialog.confirm({
        title: "客服电话",
        message: "400-062-5166",
        confirmButtonText: "呼叫",
        confirmButtonColor: "#39828C",
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    },
  },
};
</script>
<style lang='less' scoped>
@import url("../../../assets/styles/style.less");
.shopbar {
  position: fixed;
  bottom: 30px;
  left: 0;
  right: 0;
  padding: 0 12px;
  > div {
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    background: #efefef;
    width: 100%;
    height: 60px;
    span {
      font-size: 23px;
    }
    p {
      font-size: 10px;
    }
  }
  .shopbutton {
    display: flex;
    align-items: center;
  }
  .addCar,
  .buy {
    width: 93px;
    height: 31px;
    border-radius: 15px;
    font-size: 15px;
    line-height: 31px;
    text-align: center;
    border: 1px solid @button-color;
  }
  .addCar {
    color: @button-color;
    margin-right: 10px;
  }
  .buy {
    background-color: @button-color;
    color: white;
  }
}
</style>
