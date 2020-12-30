<template>
  <van-nav-bar
  title="注意事项"
  left-arrow
  @click-left="onClickLeft"
  :border="borderr"
  :fixed="fixedd"
  :placeholder="placeholderr"
  />
  <h1>注意事项页面</h1>
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
    return {};
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
h1 {
  text-align: center;
  margin-top: 50px;
}
</style>
