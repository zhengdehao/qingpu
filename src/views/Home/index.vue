<template>
  <div>
    <!-- 首页轮播图 -->
    <banner />
    <myfooter />
  </div>
</template>

<script  lang="ts">
import banner from "../../components/Home/banner.vue";
import myfooter from "../../components/Common/MyFooter.vue";
export default {
  data() {
    return {};
  },

  components: {
    banner,
    myfooter
  },

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='less' scoped>

</style>
