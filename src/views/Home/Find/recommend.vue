<template>
  <div class="recommend">
    <header-two :themetitle="themeTitle"></header-two>
    <img v-if="article.length" :src="article[0].detailImg" alt="" class="detailImg" />
  </div>
</template>

<script lang='ts'>
import HeaderTwo from "../../../components/Find/detail/HeaderTwo.vue";
import { getFindListApi } from "../../../utils/api";
export default {
  data() {
    return {
      themeTitle: "推荐",
      id:"",
      article:[]   
    }
  },
  components: {
    HeaderTwo
  },

  computed: {},

  mounted() {
    this.id=this.$route.params.id;
    this.getFindList();

  },

  methods: {
    async getFindList() {
      let res = await getFindListApi();
      this.article = res.result.cultureList.concat(res.result.insideList);
      this.article=this.article.filter((elm)=>{
        return elm.id===this.id
      })
  }
}
}
</script>
<style lang='less' scoped>
.recommend{
  height: 100vh;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
   }
  overflow: -moz-scrollbars-none; 
} 
.detailImg{
  width:100%;
}
</style>
