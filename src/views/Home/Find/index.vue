<template>
<find-header v-if="flag"></find-header>
<div class="wrapper">
  <div class="find">
      <h1>发现</h1>
      <find-list></find-list>
      <h2>人文周刊</h2>
      <humanity-list />
  </div>
</div>
</template>

<script lang="ts">
import BScroll from 'better-scroll';
import FindList from "../../../components/Find/FindList.vue";
import HumanityList from "../../../components/Find/HumanityList.vue";
import FindHeader from "../../../components/Find/FindHeader.vue";
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      flag: false as Boolean,
    };
  },

  components: {
    FindList,
    HumanityList,
    FindHeader,
  },
  mounted() {
    this.$nextTick(() => {
        let bs = new BScroll(".wrapper", {
          scrollX:false,
          scrollY:true,
          click:true,
          probeType:3
        });
        bs.on('scroll', (position:any) => {
        this.flag=position.y<-50;
    });
    })
  },

});
</script>
<style lang="less" scoped>
.wrapper{
  overflow: hidden;
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:50px ;
}
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
