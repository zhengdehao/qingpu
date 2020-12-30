<template>
  <hadertwo themetitle="等一个人，陪我去扬州" />
  <img src="../../../assets/images/jiujiu/home04.jpg" alt="" class="headImg">
  <!-- <div class="headaside"></div> -->
  <!-- <div class="detailbox">
    <ul>
      <li>
        <div class="mask">度假</div>
        <img src="" alt="">
        <div class="title">青普雅集招募 | 博物馆亲子课堂：NiKi花园奇景</div>
        <div class="price"></div>
      </li>
    </ul>
  </div> -->
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import hadertwo from "../../../components/Common/DetailHeaderTwo.vue";
export default defineComponent ({
  props: ["listindex"],
  components: {
    hadertwo
  }
});
</script>
<style lang='less' scoped>
.headImg {
  width: 100%;
  height: 645px;
}
.headaside {
  width: 70px;
  height: 4px;
  margin: 40px auto 36px;
  background: #EFEBEF;
}
.detailbox {
  padding-bottom: 20px;
  li {
    width: 345px;
    height: 338px;
    margin:0 auto;
    position: relative;
    box-shadow: 0 2px 5px 0 #ccc;
    border-radius: 10px;
    .mask {
      width: 44px;
      height: 23px;
      background: #29A2B5;
      position: absolute;
      top: 10px;
      left: 10px;
      border-radius: 5px;
      color: #fff;
      font-size: 9px;
      text-align: center;
      line-height: 23px;
    }
    img {
      width: 100%;
      height: 230px;
    }
    .title {
      width: 290px;
      font-size: 15px;
      line-height: 18px;
      margin-left: 20px;
      margin-right: 20px;
    }
  }
}
</style>
