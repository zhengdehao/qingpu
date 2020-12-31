<template>
  <div class="hot-wrap">
    <h3>热卖臻品</h3>
    <div class="hot-list">
      <ul>
        <li v-for="(item, index) in hotList" :key="item.id">
          <img :src="item.bgImg" alt="">
          <p>{{ item.nm }}</p>
          <span>{{ item.minprice }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hotList: Array
  },
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
        margin-bottom: 30px;
        flex-shrink: 0;
        p {
          line-height: 18px;
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #333333;
        }
        span { 
          font-size: 10px;
          font-family: DIN Light;
          font-weight: 400;
          color: #666666;
          display: block;
          margin: 5px 0 10px;
        }
        img {
          height: 165px;
          width: 165px;
        }
      }
    }
  }
}
</style>
