<template>
<div style="overflow-x:hidden">
  <div class="findlist">
    <ul>
      <li>
        <div>
          <p>会员&共建人</p>
          <h3>1月青浦雅集</h3>
        </div>
      </li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>

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
   this.findlist();
  },

  methods: {
    findlist(){
       new BScroll(".findlist", {
        scrollX: true,
        scrollY: false,
        click: true
      });
    }
  },
};
</script>
<style lang='less' scoped>
.findlist {
  margin-left: 14px;
  width: 100%;
  overflow: hidden;
  ul {
    display: inline-flex;
    li {
      overflow: hidden;
      float: left;
      border-radius:5px;
      flex-shrink: 0;
      width: 207px;
      height: 124px;
      margin-right: 12.5px;
      background-color: wheat;
      position: relative;
      div{
        width: 100%;
        color:white;
        position: absolute;
        bottom: 0px;
        padding-bottom: 20px;
        background: linear-gradient(to bottom, rgba(255,255,255,0),rgba(0,0,0,0.4));
        p{
          padding-left: 15px;
          font-size: 12px;
        }
        h3{
          padding-left: 15px;
          font-size: 15px;
          font-weight: 700;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
