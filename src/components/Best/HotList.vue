<template>
  <div class="hot-wrap">
    <h3>热卖臻品</h3>
    <div class="hot-list">
      <ul>
        <li v-for="(item, index) in 4" :key="index">
          <img src="" alt="">
          <p></p>
          <span></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang='less' scoped>
.hot-wrap {
  h3 {
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 30px;
  }
  .hot-list {
    width: 100%;
    ul {
      display: flex;
      width: 100%;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        width: 165px;
        height: 200px;
        background: pink;
        margin-bottom: 30px;
        flex-shrink: 0;
      }
    }
  }
}
</style>
