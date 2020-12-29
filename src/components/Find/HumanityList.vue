<template>
  <div class="list">
    <ul>
      <li v-for="item in humanityList"><img :src="item" alt=""></li>
      <li><img src="http://42.192.155.18:3180/images/banner/banner_02.jpg" alt=""></li>
      <li><img src="http://42.192.155.18:3180/images/banner/banner_02.jpg" alt=""></li>
    </ul>
  </div>
</template>

<script lang='ts'>
import BScroll from 'better-scroll';
export default {
  props:["humanityList"],
  data() {
    return {
      
    };
  },

  components: {},

  computed: {},

  mounted() {
 
  },

  methods: {}
  };
</script>
<style lang='less' scoped>
.list {
  width:100%;
  overflow: auto;
  ul {     
    padding-left:20px ;
    li {
      width: 335px;
      border-radius:5px;
      margin: 16px 0;
      overflow: hidden;
        }
        img{
          min-width: 100%;
          min-height: 100%;
        }
      }
  }
</style>
