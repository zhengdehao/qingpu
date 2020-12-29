<template>
  <div>
    <i @click="back"><van-icon name="arrow-left" /></i>
    <p>
      <span><share-icon/></span>
    </p>
      <h3>{{themetitle}}</h3> 
  </div>
</template>

<script lang='ts'>
import ShareIcon from "../../Common/ShareIcon.vue"
export default {
 props:{
    themetitle:String,
  },
  components: {
    ShareIcon
  },
  
  computed: {},

  mounted() {},

  methods: {
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
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0),
    rgba(0, 0, 0, 0.4)
  );
  font-size: 24px;
  color: white;
  overflow: hidden;
  i {
    padding-left: 5px;
    line-height: 50px;
    float: left;
  }
  p {
    line-height: 50px;
    float: right;
    padding-right: 15px;
    span{
      padding-left:50px;
    }
  }
  h3{
    font-size: 18px;
    line-height: 50px;
    position: fixed;
    left: 50%;
    font-weight: normal;
    transform: translateX(-50%);
  }
}
</style>
