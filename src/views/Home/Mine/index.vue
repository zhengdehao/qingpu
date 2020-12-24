<template>
  <div class="mine">
    <van-nav-bar
      title="我的"
      fixed=true
      placeholder=true
      class="title"
      border=false
    />
    <!-- <personal /> -->
    <unpersonal />
    <list />
  </div>
</template>

<script lang="ts">
//引入我的页面，头部个人信息组件
import personal from "../../../components/Mine/personal.vue";
import unpersonal from "../../../components/Mine/unpersonal.vue";
//引入列表组件
import list from "../../../components/Mine/list.vue";
import { defineComponent } from 'vue';
import { Toast } from 'vant';
import "../../../assets/styles/style.less";
export default defineComponent ({
  data() {
    return {};
  },

  components: {
    personal,
    unpersonal,
    list
    // member
    // myfooter
  },

  computed: {},

  mounted() {},

  methods: {}
});
</script>
<style lang="less" scoped>
</style>
