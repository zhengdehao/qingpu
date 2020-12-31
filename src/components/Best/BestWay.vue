<template>
  <div class="bestway">
    <h3>臻选攻略</h3>
    <div class="waylist">
      <ul>
        <li>
          <img src="../../assets/images/best/zpgl01.jpg" alt="" style="height:100%;width:100%">
        </li>
        <li>
          <img src="../../assets/images/best/zpgl02.jpg" alt="" style="height:100%;width:100%">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    wayList: Array
  }
};
</script>
<style lang='less' scoped>
.bestway {
  margin-bottom: 38px;
  h3 {
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 30px;
  }
  .waylist {
    width: 100%;
    ul {
      li {
        width: 100%;
        height: 75px;
        margin-bottom: 12px;
      }
    }
  }
}
</style>
