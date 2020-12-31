<template>
  <hadertwo themetitle="舒适生活带回家" />
  <img src="../../../assets/images/jiujiu/home03.jpg" alt="" class="headImg">
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import hadertwo from "../../../components/Common/DetailHeader.vue";
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
</style>
