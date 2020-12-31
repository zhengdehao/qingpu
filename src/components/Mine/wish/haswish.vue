<template>
  <div class="haswish">
    <van-checkbox-group v-model="state.checked" ref="checkboxGroup">
      <template v-for="(item,index) in state.checkedList" :key="index">
        <van-swipe-cell >
          <template #left>
            <van-checkbox :name="item" />
          </template>
          <van-card
            :key="item.title"
            :num="item.num"
            :price="item.price"
            :title="item.title"
            :thumb="item.thumb"
          />
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" @click="del(index)"/>
          </template>
        </van-swipe-cell>
      </template>
    </van-checkbox-group>

    <van-submit-bar :price="allPrice" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked" @click="checkAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { defineComponent,reactive,ref,computed } from "vue";
import {Toast} from "vant";
export default {
  setup() {
    const state = reactive({
      checked: ref([]),
      checkedList: [
        {
          title:"原创臻品|青普创|山海经图案多功能桌垫",
          num:1,
          price:58,
          thumb:"http://42.192.155.18:3180/images/zp/hcmq/hcmq01.jpg"
        },
        {
          title:"万仟臻选·《清平乐》孤城闭成套茶席",
          num:1,
          price:1280,
          thumb:"http://42.192.155.18:3180/images/zp/hcmq/hcmq02.jpg"
        },
        {
          title:"万仟臻选·梅秀早春茶具",
          num:1,
          price:58,
          thumb:"http://42.192.155.18:3180/images/zp/hcmq/hcmq03.jpg"
        },
        {
          title:"使用保香·事事如意茶罐",
          num:1,
          price:1180,
          thumb:"http://42.192.155.18:3180/images/zp/hcmq/hcmq05.jpg"
        },
        {
          title:"青普定制·锡口青白瓷茶仓",
          num:1,
          price:568,
          thumb:"http://42.192.155.18:3180/images/zp/yczp/yczp08.jpg"
        },
        {
          title:"铁包银茶则·失传工艺复兴 古拙美",
          num:1,
          price:1600,
          thumb:"http://42.192.155.18:3180/images/zp/yczp/yczp13.jpg"
        }
      ]
    })
    
   
    const checkboxGroup = ref(null);

    const checkAll = () => {
      checkboxGroup.value.toggleAll(true);
    }
    // function allPrice() {
    //   // console.log(state.sum)
    //   // state.sum = state.sum + price*100;
    //   // console.log(state.sum);
    //   console.log(state.checked);
    //   state.sum = 0;
    //   state.checked.forEach(item => {
    //     state.sum += item.price;
    //   })
    // }
    const allPrice = computed(() => state.checked.reduce((sum, item) => {
      return sum += item.price*100
    }, 0))


  
    return { 
      state,
      allPrice,
      checkAll,
      checkboxGroup
    };
  },
  methods: {
    del(index) {
      this.checkedList.splice(this.checkedList[index],1)
    },
    onSubmit() {
      Toast("订单已经提交");
    }
  }
};
</script>
<style lang='less' scoped>
@import "../../../assets/styles/style.less";
.haswish{
  margin-bottom: 60px;
  
}

</style>
