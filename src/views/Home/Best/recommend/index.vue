<template>
  <div class="banner">
    <img src="" alt="">
  </div>
  <section class="rec-content">
    <act-list :imgList="imgList"></act-list>
    <best-way :wayList="wayList"></best-way>
    <hot-list></hot-list>
  </section>
</template>

<script lang="ts">
  import { defineComponent, ref, reactive, watch } from 'vue';
  import ActList from "../../../../components/Best/ActList.vue";
  import BestWay from "../../../../components/Best/BestWay.vue";
  import HotList from "../../../../components/Best/HotList.vue";
  export default defineComponent({
    setup() {
      const imgList = reactive([
        "",
        "",
        "",
        ""
      ])

      const wayList = reactive([
        "",
        ""
      ])

      return { imgList, wayList }
    },
    components: {
      ActList,
      BestWay,
      HotList
    }

  });
  </script>
  <style lang='less' scoped>
  .banner {
    height: 195px;
    width: 334px;
    margin: 17px 21px 50px 21px;
    background: pink;
    border-radius: 5px;
  }
  .rec-content {
    padding: 0 15px;
  }
</style>
