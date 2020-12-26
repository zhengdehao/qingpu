<template>
  <div>
    <i @click="back"><van-icon name="arrow-left" /></i>
    <p>
      <span> <van-icon name="like-o" /></span>
      <span><share-icon/></span>
    </p>
      <h3>{{themetitle}}</h3> 
  </div>
</template>

<script lang='ts'>
import ShareIcon from "./ShareIcon.vue"
export default {
  data() {
    return {};
  },
 props:{
    themetitle:String,
  },
  components: {
    ShareIcon
  },

  computed: {},

  mounted() {},

  methods: {
    back(){
      this.$router.go(-1);
    }
  },
};
</script>
<style lang='less' scoped>
div{
 border-bottom: 1px solid #e8e8e8;
 z-index: 100;
 position:fixed;
 top:0;
 left:0;
 width: 100%;
 background:white;
 font-size:24px;
 overflow: hidden;
 i{
   padding-left: 5px;
   line-height: 44px;
   float: left;
 }
 p{
   line-height: 44px;
   float:right;
   padding-right: 15px;
   span{
     padding-left:10px;
   }
 }
 h3{
   font-size: 18px;
   line-height: 44px;
   width: 68%;
   position: fixed;
   left: 50%;
   font-weight: normal;
   transform: translateX(-55%);
   white-space: nowrap;
   overflow: hidden;
   text-overflow:ellipsis;
 }
}


</style>
