<template>
  <div class="commhead">
    <van-icon name="arrow-left" size="30" color="#333" @click="toback"/>
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

  methods: {
    toback() {
      window.history.go(-1)
    }
  }
};
</script>
<style lang='less' scoped>
.commhead {
  width: 325px;
  height: 50px;
  padding: 0 25px;
  background: rgba(255, 255, 255, 0);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  .van-icon{
    line-height: 50px;
  }

}
</style>
