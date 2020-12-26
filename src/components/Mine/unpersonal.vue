<template>
  <div class="unpersonal">
    <header>
      <section class="cont">
        <div class="lef">
          <h2>请登录</h2>
        </div>
        <div class="rig">
          <van-icon name="contact" color="#666" />
        </div>
      </section>
    </header>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='less' scoped>
.unpersonal{
  margin-top: 50px;
  header {
    height: 135px;
    padding: 0 25px;
    .cont {
      padding: 23px 0 73px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .lef {
        width: 152px;
        height: 35px;
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
      }
      .rig {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        text-align: center;
        line-height: 60px;
        background: #ccc;
        font-size: 30px;
      }
    }
  }
}
</style>
