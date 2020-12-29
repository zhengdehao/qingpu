<template>
<find-header v-if="flag"></find-header>
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

      <div class="find">
          <h1>发现</h1>
          <find-list></find-list>
          <h2>人文周刊</h2>
          <humanity-list :humanityList="humanityList"/>
      </div>
    </van-pull-refresh>
</div>
</template>

<script lang="ts">
import BScroll from "better-scroll";
import FindList from "../../../components/Find/FindList.vue";
import HumanityList from "../../../components/Find/HumanityList.vue";
import FindHeader from "../../../components/Find/FindHeader.vue";
import { defineComponent } from "vue";
import { reactive } from "vue";
import { Toast } from "vant";
export default defineComponent({
    setup() {
    const state = reactive({
      loading: false,
    });
    let humanityList=[] as Array<string>;
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
      humanityList
    };
    
  },
  data() {
    return {
      flag: false as Boolean,
    };
  },
  components: {
    FindList,
    HumanityList,
    FindHeader,
  },
  mounted() {
    this.$nextTick(() => {
      let bs = new BScroll(".wrapper", {
        scrollX: false,
        scrollY: true,
        click: true,
        pullUpLoad: true,
        probeType: 3,
        bounce:{
          top:false
        }
      });
      bs.on("scroll", (position: any) => {
        this.flag = position.y < -50;
      });
     bs.on("pullingUp", async () => {
      await this.$nextTick();
       bs.refresh();
    });
    });
  },
  
})
</script>
<style lang="less" scoped>
.wrapper {
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 50px;
}
.doge {
  width: 140px;
  height: 72px;
  margin-top: 8px;
  border-radius: 4px;
}
.find {
  padding-top: 30px;
  color: #333;
  h1 {
    padding-left: 16px;
    font-size: 24px;
    padding-top: 30px;
    padding-bottom: 42.5px;
  }
  h2 {
    margin-left: 17px;
    font-size: 16px;
    padding: 59px 0 21.5px 0;
  }
}
</style>
