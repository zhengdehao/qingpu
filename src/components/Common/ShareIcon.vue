<template>
  <van-icon name="share-o" @click="showShare = true" />
   <van-share-sheet
        v-model:show="showShare"
        title="立即分享给好友"
        :options="options"
        @select="onSelect"
      />
</template>

<script lang='ts'>
import { ref } from "vue";
import { Toast } from "vant";
export default {
  setup() {
    const showShare = ref(false);
    const options = [
      { name: "微信", icon: "wechat" },
      { name: "微博", icon: "weibo" },
      { name: "复制链接", icon: "link" },
      { name: "分享海报", icon: "poster" }
    ];
    const onSelect=(option)=>{
          Toast(option.name);
      showShare.value = false;
    }
   return {
      options,
      onSelect,
      showShare,
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='less' scoped></style>
