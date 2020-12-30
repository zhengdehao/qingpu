<template>
  <section class="zp">
    <header class="best-header">
      <van-nav-bar
        @click-right="onClickRight"
      >
        <template #right>
          <span class="iconfont icon-shoucangxinyuandanyuanwangqingdantuijian" style="font-size: 22px;font-weight:900;margin-right:16px"></span>
        </template>
      </van-nav-bar>
      <h2 class="best-title">臻品</h2>
      <van-tabs v-model="active" sticky line-width="30px" animated @click="getGoodsList">
        <van-tab v-for="( item, index ) in state.navList" :key="index" :title="item.title" >
          <div v-if="item.type === '0'">
            <recommend></recommend>
          </div>
          <ul v-else class="goods-list">
            <li v-for="item in state.goodsList" :key="item.id" @click="intoDetail(item.id)">
              <img :src="item.bgImg" alt="">
              <p>{{ item.nm }}</p>
              <span>{{ item.minprice }}</span>
            </li>
          </ul>
        </van-tab>
      </van-tabs>
    </header>
  </section>
</template>

<script lang="ts">
import recommend from "./recommend/index.vue";
import { getGoodsListApi } from "../../../utils/api.js";
import { defineComponent, ref, reactive, watch } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent ({
  setup() {
    let active = ref(0);
    // let navList = ['推荐','文化艺术','好茶美器','美居生活','在地风物','在地风物','在地风物','在地风物'];
    let state = reactive({
      navList: [
        {
          title:'推荐',
          type: "0"
          // path: "/best/recommend"
        },
        {
          title:'文化艺术',
          type: "1"
          // path: "/best/recommend"
        },
        {
          title:'好茶美器',
          type: "2"
          // path: "/best/recommend"
        },
        {
          title:'美居生活',
          type: "3"
          // path: "/best/recommend"
        },
        {
          title:'在地风物',
          type: "4"
          // path: "/best/recommend"
        },
        {
          title:'原创臻品',
          type: "5"
          // path: "/best/recommend"
        },
        {
          title:'青普甄选',
          type: "2"
          // path: "/best/recommend"
        }
      ],
      goodsList: []
    });


    let type = ref("0");


    //路由跳转

    const router = useRouter()

    function intoDetail(id:any) {
      console.log(1);
      // router.push({
      //   name: '/bestdetail',
      //   query: {
      //     id:id
      //   },
      // })
      router.push('/bestdetail/' + id);
    }
    


    return { state, active, intoDetail};
  },
  components: {
    recommend
  },
  methods: {
    async getGoodsList(index:any) {
      this.type = this.state.navList[index].type;
      const res = await getGoodsListApi({type: this.type});
      console.log(res);
      this.state.goodsList = res.result;
    }
  }
});
</script>

<style lang="less" scoped>
.best-title {
  font-size: 24px;
  line-height: 24px;
  margin-top: 30px;
  margin-bottom: 18px;
}

.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    flex-shrink: 0;
    width: 165px;
    p {
      line-height: 18px;
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #333333;
    }
    span { 
      font-size: 10px;
      font-family: DIN Light;
      font-weight: 400;
      color: #666666;
      display: block;
      margin: 5px 0 10px;
    }
    img {
      height: 165px;
      width: 165px;
    }
  }
}

.best-header {
  padding: 0 15px;
}
</style>
