<template>
  <banner />
  <div id="firstBox">
    <span class="hotspan" :border="false">热门目的地</span>
    <hotList />
    <homeList />
    <otherList />
    <otherList />
    <otherList />
  </div>
</template>

<script>
import Banner from '../../../components/Home/banner.vue';
import hotList from '../../../components/Home/hotList.vue';
import homeList from '../../../components/Home/homeList.vue';
import otherList from '../../../components/Home/otherList.vue';
import { defineComponent } from 'vue';
export default defineComponent ({
  data() {
    return {
      listTitle: ["", "", "", ""]
    };
  },

  components: {
    Banner,
    hotList,
    homeList,
    otherList
  },

  computed: {},

  mounted() {},

  methods: {}
});
</script>
<style lang="less" scoped>
#firstBox {
  color: #000;
  font-family: "PingFang-SC-Regular";
  padding-left: 14px;
  .hotspan {
    display: block;
    line-height: 15px;
    margin: 34px 0 19px 0;
    font-size: 16px;
    font-weight: bold;
}
}

</style>
