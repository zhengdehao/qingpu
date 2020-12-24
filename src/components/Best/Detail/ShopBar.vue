<template>
  <div class="shopcar">
    <div>
      <span><van-icon name="shopping-cart-o" /></span>
    </div>
  </div>
</template>

<script lang='ts'>
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
.shopcar{
  position:fixed;
  bottom:30px;
  left:0;
  right: 0;
  padding:0 22px;
  >div{
    background: #EFEFEF;
    width: 100%;
  }
}
</style>
