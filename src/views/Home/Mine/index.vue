<template>
  <div class="mine">
    <section class="title">
      <div>我的</div>
    </section>
    <personal />
    <list />
    <!-- <member /> -->
    <!-- <myfooter /> -->
  </div>
</template>

<script lang="ts">
//引入我的页面，头部个人信息组件
import personal from "../../../components/Mine/personal.vue";
//引入列表组件
import list from "../../../components/Mine/list.vue";
//引入footer组件
// import myfooter from "../../../components/Common/MyFooter.vue";
import { defineComponent } from 'vue';
export default defineComponent ({
  data() {
    return {};
  },

  components: {
    personal,
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
.title {
    width: 100%;
    height: 50px;
    padding: 0 25px;
    text-align: center;
    line-height: 50px;
    background: lightgreen;
    div {
      font-size: 22px;
      font-weight: 600;
      // display: none;
    }
  }
</style>
