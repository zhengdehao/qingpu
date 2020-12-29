<template>
  <div class="list">
    <ul>
      <li @click="change(item.id)" v-for="item in cultureList"><img :src="item.indexImg" alt=""/></li>
    </ul>
  </div>
</template>

<script lang='ts'>
import BScroll from 'better-scroll';
export default {
  props:["cultureList"],
  data() {
    return {
      id:""
    };
  },

  components: {},

  computed: {},
  mounted() {
  },

  methods: {
    change(id){
      this.$router.push(`/findrecommend/${id}`)
    }
  }
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
      height: 448px;
      border-radius:5px;
      margin: 16px 0;
      overflow: hidden;
        }
        img{
          width: 100%;
          height: 100%;
        }
      }
  }
</style>
