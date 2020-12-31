<template>
  <header-one v-show="!flag"></header-one>
  <header-two :themetitle="find[0].title" v-if="flag"></header-two>
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
      <keep-alive>
       <div v-if="find.length">
        <img
          class="themeImg"
          :src="find[0].detailImg"
          alt=""
        />
        <p class="line"></p>
        <article  @click="change(item.id)" v-if="weeklyList.length" v-for="item in weeklyList" :key="item.id">
          <img
            :src="item.titleImg"
            alt=""
          />
          <h3>{{item.title}}</h3>
          <h6>{{item.author}}</h6>
        </article>
       </div>
      </keep-alive>
    </van-pull-refresh>
  </div>
</template>

<script lang='ts'>
import HeaderOne from "../../../components/Find/detail/HeaderOne.vue";
import HeaderTwo from "../../../components/Find/detail/HeaderTwo.vue";
import BScroll from "better-scroll";
import { reactive } from "vue";
import { Toast } from "vant";
import { getFindListApi } from "../../../utils/api";
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
          duration: 1000,
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
      id: "",
      find: [],
      weeklyList: [],
    };
  },

  components: {
    HeaderOne,
    HeaderTwo,
  },

  computed: {},

  mounted() {
    this.id = this.$route.params.id;
    this.getFindList();
  },

  methods: {
    change(id) {
      this.$router.push(`/findrecommend/${id}`);
    },
    async getFindList() {
      let res = await getFindListApi();
      //获取雅集的背景图,主题文字
      this.find = res.result.monthList.filter((elm) => {
        return (elm.id === this.id);
      });
      //获得下面文章封面和标题
      this.weeklyList=res.result.insideList.filter((elm)=>{
         return (elm.month === this.find[0].month);
      })   
      await this.$nextTick();
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
  width: 100%;
  height: 100vh;
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
  h3 {
    font-size: 18px;
    padding: 20px 20px 0px 20px;
  }
  h6 {
    font-size: 12px;
    color: rgb(109, 106, 106);
    padding: 15px 0 0 20px;
    font-weight: 100;
  }
}
</style>
