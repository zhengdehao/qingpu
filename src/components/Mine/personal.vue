<template>
  <div class="personal">
    <header>
      <section class="cont">
        <div class="lef">
          <h2>用户名</h2>
          <span>10积分 ></span>
        </div>
        <div class="rig">
          <img :src="urls" alt="">
        </div>
      </section>
    </header>
    <div class="main">
      <div class="bg">
        <img :src="url" alt="">
      </div>
      <div class="member">
      <section class="tex">
        <p>粉青会员</p>
        <p><van-icon name="pending-payment" class="money" /> 余额：<i>0.00</i>元</p>
      </section>
      <section>
        <van-icon name="arrow" color="#fff" size="22" />
      </section>
    </div>
    </div>
  </div>
</template>

<script>
import urls from "../../../public/images/personal.png";
import url from "../../../public/personal-bg.png";
export default {
  data() {
    return {
      urls: urls,
      url: url
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='less' scoped>
.personal {
  overflow: hidden;
  header {
    padding: 0 25px;
    background: lightblue;
    
    .cont {
      padding: 23px 0 73px;
      display: flex;
      justify-content: space-between;
      .lef {
        width: 152px;
        height: 60px;
        font-family: PingFang SC;
        color: #333333;
        font-size: 17px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h2 {
          width: 100%;
          height: 30px;
          font-size: 31px;
          font-weight: bold;
        }
        span {
          width: 113px;
          height: 16px;
        }
      }
      .rig {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

.main {
  position: relative;
  .bg {
    width: 325px;
    height: 92px;
    margin: 0 auto;
    img {
      width:100%;
    }
  }
  .member {
    width: 325px;
    height: 92px;
    margin-left: 25px;
    display: flex;
    justify-content: space-between;
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    section {
      align-self: center;
      padding: 0 25px;
    }
    .tex {
      height: 43px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #FFFFFF;
      font-size: 17px;
      line-height: 24px;
      p:nth-of-type(2) {
        font-size: 12px;
        vertical-align: middle;
      }
    }
    .money {
      font-size: 20px;
      vertical-align: middle;
    }
  }
}

</style>
