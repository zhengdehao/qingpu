<template>
  <div class="list">
    <ul>
      <router-link
        tag="li"
        v-for="item in memberList"
        :key="item.icon"
        :to="item.url"
        class="lili"
      >
        <p>{{ item.title }}</p>
        <p><van-icon :name="item.name" /></p>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      memberList: [
        {
          title: "行程订单",
          name: "bag-o",
          url: "/travel"
        },
        {
          title: "臻品订单",
          name: "balance-list-o",
          url: "/travel"
        },
        {
          title: "优惠券",
          name: "bill-o",
          url: "/travel"
        },
        {
          title: "心愿单",
          name: "shop-collect-o",
          url: "/travel"
        },
        {
          title: "个人信息",
          name: "contact",
          url: "/travel"
        },
        {
          title: "设置",
          name: "setting-o",
          url: "/travel"
        },
      ]
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='less' scoped>
.list {
  ul {
    width: 325px;
    margin: 0 auto;
    .lili {
      width: 100%;
      height: 92px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #e8e8e8;
      font-size: 19px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #333333;
      p{
        align-self: center;
        &:nth-of-type(2){
          font-size: 27px;
        }
      }
    }
  }
}

</style>
