<template>
  <div>
    <!-- 首页轮播图 -->
    <router-view></router-view>
    <myfooter />
  </div>
</template>

<script  lang="ts">
import banner from "../../components/Home/banner.vue";
import myfooter from "../../components/Common/MyFooter.vue";
import { defineComponent } from 'vue';
export default defineComponent ({
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
})
</script>
<style lang='less' scoped>

</style>
