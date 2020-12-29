<template>
  <div class="nowish">
    <div class="imgg">
      <van-icon name="bag-o" size="80px" color="#D1D1D1"/>
    </div>
    <p>购物车是空的</p>
  </div>
</template>

<script>
import { defineComponent,ref,reactive } from "vue";

export default {
  setup() {

  }
};
</script>
<style lang='less' scoped>
.nowish {
    padding: 0 25px;
  .imgg {
    margin: 150px 115px 0;
  }
  p{
    width: 220px;
    height: 15px;
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #D1D1D1;
    margin: 20px 110px;
  }
}
</style>
