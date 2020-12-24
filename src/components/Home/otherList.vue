<template>
  <div class="otherBox">
    <van-cell :title="hometitle" is-link value="查看全部" />
    <div class="otheritemBox">
      <ul class="otherListUl" :style="{width: otherWidth}">
        <li v-for="item in otherList">
            <img src="" alt="">
          <p>{{ item.describe }}</p>
          <p>￥{{ item.price }}起</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent ({
  props: ["hometitle"],
  setup(props) {
    const otherList = [
      {
        describe: "青普文化行馆·黄山秀里",
        img: "图片",
        price: 1488
      },
      {
        describe: "青普文化行馆·八达岭瑞云",
        img: "图片",
        price: 2088
      },
      {
        describe: "青普文化行馆·南靖土楼",
        img: "图片",
        price: 1288
      },
      {
        describe: "青普文化行馆·扬州瘦西湖",
        img: "图片",
        price: 888
      },
      {
        describe: "青普文化行馆·苏州木渎",
        img: "图片",
        price: 1288
      },
      {
        describe: "青普文化行馆·丽江白沙",
        img: "图片",
        price: 1288
      }
    ];
    let otherWidth = otherList.length * 167;


    return { otherList, otherWidth };
  }
});
</script>
<style lang='less' scoped>
.otherBox {
  margin-bottom: 38px;
  .van-cell--clickable {
    font-size: 16px;
    padding: 0;
    padding-right: 15px;
  }
  .otheritemBox {
      overflow: auto;
        &::-webkit-scrollbar {
        display: none;
      }
    .otherListUl {
        height: 166px;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 17px;
      li {
        width: 167px;
        height: 166px;
        margin-right: 10px;
        border-radius: 3px;
        img {
          width: 167px;
          height: 112px;
          border-radius: 3px;
        }
        p:nth-of-type(1) {
          height: 12px;
          line-height: 12px;
          font-size: 12px;
        }
        p:nth-of-type(2) {
          margin-top: 7px;
          height: 10px;
          line-height: 10px;
          font-size: 10px;
          color: #5F5F5F;
        }
      }
    }
  }
}
</style>
