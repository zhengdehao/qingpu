<template>
  <div>
     <header-two :themetitle="themeTitle"></header-two>
  </div>
</template>

<script lang='ts'>
import HeaderTwo from "../../../components/Find/detail/HeaderTwo.vue";
export default {
  data() {
    return {
      themeTitle: "推荐",
    };
  },
  components: {
    HeaderTwo
  },

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='less' scoped></style>
