<template>
  <div class="footer">
    <van-tabbar  route v-model="active" active-color="#29A2B5" inactive-color="#666666" placeholder>
      <van-tabbar-item to="/firstpage" >
        <span>首页</span>
        <template #icon="props">
          <i class="iconfont icon-shouye"
            ></i>
        </template>
      </van-tabbar-item>

      <van-tabbar-item to="/find">
        <span>发现</span>
        <template #icon="props">
          <i class="iconfont icon-faxian2"></i>
        </template>
      </van-tabbar-item>

      <van-tabbar-item to="/best">
        <span >臻品</span>
        <template #icon="props">
          <i class="iconfont icon-kafei"></i>
        </template>
      </van-tabbar-item>

      <van-tabbar-item to="/mine">
        <span>我的</span>
        <template #icon="props">
          <i class="iconfont icon-wode2"></i>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";
export default defineComponent({
  data() {
    return {
      active:0
    };
  },
  setup() {
    const active = ref(0);
    return {
      active
    };
  },
});
</script>
<style lang="less" scoped>
.footer{
  .iconfont{
    font-size: 22px;
  }
}
</style>
