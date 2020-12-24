<template>
<div class="wrapper">
  <div class="find">
    <find-header v-if="local"></find-header>
    <div>
      <h1>发现</h1>
      <find-list></find-list>
      <h2>人文周刊</h2>
      <humanity-list />
    </div>
  </div>
</div>
</template>

<script lang="ts">
import FindList from "../../../components/Find/FindList.vue";
import HumanityList from "../../../components/Find/HumanityList.vue";
import FindHeader from "../../../components/Find/FindHeader.vue";
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      local: false as Boolean,
    };
  },

  components: {
    FindList,
    HumanityList,
    FindHeader,
  },

  computed: {},

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll: function () {
      // 滚动时，距离顶部的距离
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 50) {
        this.local = true;
      } else {
        this.local = false;
      }
    },
  },
  unmounted() {
    //离开这个界面之后，删除，不然会有问题
    window.removeEventListener("scroll", this.handleSroll);
  },
});
</script>
<style lang="less" scoped>
// .wrapper{
  
// }
.find {
  padding-top:30px;
  color: #333;
  h1 {
    padding-left: 16px;
    font-size: 24px;
    padding-top: 30px;
    padding-bottom: 42.5px;
  }
  h2 {
    margin-left: 17px;
    font-size: 16px;
    padding: 59px 0 21.5px 0;
  }
}
</style>
