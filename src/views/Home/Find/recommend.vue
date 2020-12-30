<template>
  <div class="recommend">
    <header-two :themetitle="themeTitle"></header-two>
    <template v-if="article.length">
       <img :src="article[0].detailImg" alt="" class="detailImg"/>
       <rec-comment v-if="article[0].comments.length" :comments="article[0].comments" ></rec-comment>
       <h2 v-else>还没有评论，快点做沙发吧！</h2>
    </template>

     
   
  </div>

</template>

<script lang='ts'>
import HeaderTwo from "../../../components/Find/detail/HeaderTwo.vue";
import RecComment from "../../../components/Find/detail/RecComment.vue";
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
    HeaderTwo,
    RecComment
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
      console.log(this.article[0].comments.length);
  }
}
}
</script>
<style lang='less' scoped>
.recommend{
  background-color:#F7F7F7 ;
  height: 100vh;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
   }
  overflow: -moz-scrollbars-none; 
} 
.detailImg{
  padding-top:50px;
  width:100%;
}
h2{
  line-height: 50px;
  text-align: center;
  font-weight: normal;
  font-size:16px;
}
</style>
