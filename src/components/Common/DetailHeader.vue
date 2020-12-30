<template>
  <div :class="{headerOne:!flag,headerTwo:flag}">
    <i @click="back"><van-icon name="arrow-left" /></i>
    <p>
      <span @click="changeLike"><van-icon v-if="!color" name="like-o" /><van-icon v-else name="like" color="#ff494a" /></span>
      <span><share-icon/></span>
      <h3 v-show="flag">{{themetitle}}</h3> 
    </p>
  </div>
</template>

<script lang='ts'>
import ShareIcon from "./ShareIcon.vue"
export default {
 data(){
   return{
      color:false
   }
 },
 props:{
    themetitle:String,
    flag:Boolean
  },
  components: {
    ShareIcon
  },

  computed: {},

  mounted() {},

  methods: {
    changeLike(){
      this.color=!this.color
    },
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang='less' scoped>
div {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 24px;
  overflow: hidden;
  i {
    padding-left: 5px;
    line-height: 44px;
    float: left;
  }
  p {
    line-height: 44px;
    float: right;
    padding-right: 15px;
    span{
      padding-left:5px;
    }
  }
   h3{
   font-size: 18px;
   line-height: 44px;
   width: 68%;
   position: fixed;
   left: 50%;
   top:0px;
   font-weight: normal;
   transform: translateX(-55%);
   white-space: nowrap;
   overflow: hidden;
   text-overflow:ellipsis;
 }
}
.headerOne{
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0),
    rgba(0, 0, 0, 0.4)
  );
  color: white;
}
.headerTwo{
 background:white;
}
</style>
