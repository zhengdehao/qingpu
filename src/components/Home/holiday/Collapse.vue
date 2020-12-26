<template>
  <!-- Collapse折叠面板组件 -->
  <div class="collapse">
    <van-collapse v-model="activeNames">
      <van-collapse-item title="特色主题空间" name="1"
        >特色主题空间内容</van-collapse-item
      >
      <van-collapse-item title="文艺体验" name="2"
        >文艺体验内容</van-collapse-item
      >
      <van-collapse-item title="文艺活动排期" name="3"
        >文艺活动排期内容</van-collapse-item
      >
    </van-collapse>
  </div>
</template>

<script lang='ts'>
import {ref} from "vue";

export default {
  setup(){
    const activeNames = ref(['0']);
    return { activeNames };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='less' scoped>
.collapse{
  padding:35px 0;
}
</style>
