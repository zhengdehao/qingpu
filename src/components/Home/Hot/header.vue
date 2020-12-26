<template>
  <div>
    <i @click="back"><van-icon name="arrow-left" /></i>
    <h3>{{provinceName}}</h3> 
  </div>
</template>

<script lang='ts'>
export default {
  data() {
    return {};
  },
 props:{
    provinceName:String,
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
 border-bottom: 1px solid #e8e8e8;
 z-index: 100;
 position:fixed;
 top:0;
 left:0;
 width: 100%;
 background:white;
 font-size:24px;
 i{
   padding-left: 5px;
   line-height: 44px;
 }
 h3{
   font-size: 18px;
   line-height: 44px;
   position: fixed;
   top:0px;
   left: 50%;
   transform:translateX(-50%);
 }
}


</style>
