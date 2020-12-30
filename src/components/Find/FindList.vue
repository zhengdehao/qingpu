<template>
  <div style="overflow-x: hidden">
    <div class="findlist">
      <ul>
        <li @click="change(item.id)" v-for="item in findList">
          <img :src="item.indexImg" alt="" />
          <div></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang='ts'>
import BScroll from "better-scroll";
export default {
  props: ["findList"],
  data() {
    return {};
  },

  components: {},

  computed: {},

  watch: {
    async findList() {
      await this.$nextTick();
      new BScroll(".findlist", {
        scrollX: true,
        scrollY: false,
        click: true,
      });
    },
  },
  mounted() {},

  methods: {
    change(id:any) {
      this.$router.push(`/elegant/${id}`);
    },
  },
};
</script>
<style lang='less' scoped>
.findlist {
  margin-left: 14px;
  width: 100%;
  overflow: hidden;
  ul {
    display: inline-flex;
    li {
      overflow: hidden;
      float: left;
      border-radius: 5px;
      flex-shrink: 0;
      width: 207px;
      height: 124px;
      margin-right: 12.5px;
      background-color: wheat;
      position: relative;
      div {
        width: 100%;
        color: white;
        position: absolute;
        bottom: 0px;
        padding-bottom: 20px;
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0),
          rgba(0, 0, 0, 0.4)
        );
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style> 
