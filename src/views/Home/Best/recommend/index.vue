<template>
  <div class="banner">
    <img src="../../../../assets/images/zp-banner.jpg" alt="" style="width:100%;height:100%">
  </div>
  <section class="rec-content">
    <act-list :imgList="imgList"></act-list>
    <best-way></best-way>
    <hot-list :hotList="hotList"></hot-list>
  </section>
</template>

<script lang="ts">
  import { defineComponent, ref, reactive, watch } from 'vue';
  import ActList from "../../../../components/Best/ActList.vue";
  import BestWay from "../../../../components/Best/BestWay.vue";
  import HotList from "../../../../components/Best/HotList.vue";
  import { getHotGoodsApi } from "../../../../utils/api";
  export default defineComponent({
    setup() {
      const imgList = reactive([
        "//42.192.155.18:3180/images/zp/activity/activity01.png",
        "//42.192.155.18:3180/images/zp/activity/activity02.png",
        "//42.192.155.18:3180/images/zp/activity/activity03.png",
        "//42.192.155.18:3180/images/zp/activity/activity04.png"
      ])

      return { imgList }
    },
    data() {
      return {
        hotList:[]
      }
    },
    components: {
      ActList,
      BestWay,
      HotList
    },
    mounted() {
      this.getHotGoods();
    },
    methods: {
      async getHotGoods() {
        const res = await getHotGoodsApi();
        console.log(res);
        this.hotList = res.result;
      }
    }

  });
  </script>
  <style lang='less' scoped>
  .banner {
    height: 195px;
    width: 334px;
    margin: 17px 0px 50px 6px;
    background: pink;
    border-radius: 5px;
  }
  // .rec-content {
  //   padding: 0 15px;
  // }
</style>
