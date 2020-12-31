<template>
  <div class="comment">
    <div v-for="(item,index) in comments" :key="index">
       <img src="http://42.192.155.18:3180/images/zp/mjsh/mjsh03.jpg" alt="">
       <p>
          <span>{{item.username}}</span>
          <i>{{item.date}}</i> 
          <b>{{item.content}}</b>
        </p>
        <div class="right">
          <van-icon  size="15px" color="#ccc" name="good-job-o" />
          <strong>{{item.zan}}</strong>
        </div>    
    </div>
  </div>
</template>

<script lang='ts'>
export default {
   props:{
    comments:Array,
  },
  data() {
    return {
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='less' scoped>
 .comment{
   margin-top:30px;
   background-color: white;
   padding: 60px 16px 0px 20px;
   >div{
     overflow: hidden;
     padding-bottom: 20px;
   }
   img{
     width: 43px;
     height: 43px;
     border-radius: 50%;
     float: left;
   }
   p{
     padding-left:14px;
     float: left;
     display: flex;
     flex-direction: column;
     line-height: 30px;
     span,b{
       font-weight:normal;
       font-size:15px;
     }
     i{
       font-size:12px;
       color:#666;
     }
   }
   .right{
     float: right;
     strong{
       padding-left: 6px;
       color:#666;
       font-size: 12px;
       font-weight: normal;
       vertical-align: middle;
     }
   }
   
 }
</style>
