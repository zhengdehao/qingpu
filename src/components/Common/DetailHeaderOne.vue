<template>
  <div>
    <i @click="back"><van-icon name="arrow-left" /></i>
    <p>
      <span> <van-icon name="like-o" /></span>
      <span><van-icon name="share-o" /></span>
    </p>
  </div>
</template>

<script lang='ts'>
export default {
  data() {
    return {};
  },

  components: {},

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
  z-index: 100;
 position:fixed;
 top:0;
 left:0;
 width: 100%;
 background: linear-gradient(to top, rgba(255,255,255,0),rgba(0,0,0,0.4));
 font-size:24px;
 color:white;
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
 }
 h3{
   height: 40px;
 }

}


</style>
