<template>
  <header-one v-if="!flag"></header-one>
  <header-two :themetitle="themeTitle" v-if="flag"></header-two>
  <div class="wrapper">
    <van-pull-refresh
      v-model="state.loading"
      :head-height="100"
      @refresh="onRefresh"
    >
      <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
      <template #pulling="props">
        <img
          class="doge"
          src="https://img.yzcdn.cn/vant/doge.png"
          :style="{ transform: `scale(${props.distance / 80})` }"
        />
      </template>
      <!-- 释放提示 -->
      <template #loosing>
        <img class="doge" src="https://img.yzcdn.cn/vant/doge.png" />
      </template>
      <!-- 加载提示 -->
      <template #loading>
        <img class="doge" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />
      </template>

      <div>
        <img 
          class="themeImg"
          src="http://42.192.155.18:3180/images/banner/banner_02.jpg"
          alt=""
        />
        <p class="line"></p>
        <article @click="change">
          <img
            src="http://42.192.155.18:3180/images/banner/banner_02.jpg"
            alt=""
          />
          <h3>青浦雅集招募 | 博物馆亲子课堂：NiKi花园奇景</h3>
        </article>
        <article>
          <img
            src="http://42.192.155.18:3180/images/banner/banner_02.jpg"
            alt=""
          />
          <h3>青浦雅集招募 | 找乐生活节</h3>
          <h6>作者：青普君</h6>
        </article>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script lang='ts'>
import HeaderOne from "../../../components/Find/detail/HeaderOne.vue";
import HeaderTwo from "../../../components/Find/detail/HeaderTwo.vue";
import BScroll from "better-scroll";
import { reactive } from "vue";
import { Toast } from "vant";
export default {
  setup() {
    const state = reactive({
      loading: false,
    });
    const onRefresh = () => {
      setTimeout(() => {
        Toast.loading({
          forbidClick: true,
          loadingType: "spinner",
          duration:1000
        });
        state.loading = false;
      }, 1000);
    };

    return {
      state,
      onRefresh,
    };
  },
  data() {
    return {
      flag: false as Boolean,
      themeTitle: "1月青普雅集",
    };
  },

  components: {
    HeaderOne,
    HeaderTwo,
  },

  computed: {},

  mounted() {
    this.$nextTick();
    let bs = new BScroll(".wrapper", {
      scrollX: false,
      scrollY: true,
      click: true,
      pullUpLoad: true,
      probeType: 3,
      bounce: {
        top: false,
      },
    });
    bs.on("scroll", (position) => {
      this.flag = position.y < -180;
    });
    bs.on("pullingUp", async () => {
      await this.$nextTick();
      bs.refresh();
    });
  },

  methods: {
    change(){
      this.$router.push("/findrecommend")
    }
  },
};
</script>
<style lang='less' scoped>
.wrapper {
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0px;
}
.doge {
  width: 140px;
  height: 72px;
  margin-top: 8px;
  border-radius: 4px;
}
.themeImg {
  min-width: 100%;
  min-height: 100vh;
}
.line {
  width: 20%;
  height: 4px;
  border-radius: 2px;
  background: #eee;
  margin: 40px auto;
}
article {
  overflow: hidden;
  margin: 0 15px 50px 15px;
  border-radius: 5px;
  box-shadow: 0 3px 5px 0px rgb(173, 172, 172);
  padding-bottom: 30px;
  img {
    width: 100%;
  }
  h3{
    font-size:18px;
    padding:20px 20px 0px 20px;
  }
  h6{
    font-size:12px;
    color:rgb(109, 106, 106);
    padding:15px 0 0 20px;
    font-weight: 100;
  }
}
</style>
