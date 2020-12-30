<template>
  <van-nav-bar
  title="费用说明"
  left-arrow
  @click-left="onClickLeft"
  :border="borderr"
  :fixed="fixedd"
  :placeholder="placeholderr"
  />
  <h1>费用说明页面</h1>
</template>

<script lang='ts'>
import { defineComponent,ref } from 'vue';
export default defineComponent ({
  setup() {
    //头部标题栏参数
    const borderr = ref(true);
    const fixedd = ref(true);
    const placeholderr = ref(true);

    return { borderr, fixedd, placeholderr };
  },
  data() {
    return {
      tourDetail: {}
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    onClickLeft() {
      window.history.go(-1);
    }
  }
});
</script>
<style lang='less' scoped>
@import "../../assets/styles/jiujiu.less";
h1 {
  text-align: center;
  margin-top: 50px;
}
</style>
