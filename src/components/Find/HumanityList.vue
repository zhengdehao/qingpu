<template>
  <div class="list">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script lang='ts'>
import BScroll from 'better-scroll';
export default {
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
      height: 488px;
      background-color: wheat;
      border-radius:5px;
      margin: 16px 0;
        }
      }
  }
</style>
