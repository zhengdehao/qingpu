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
export default {
  setup() {
    const state = reactive({
      checked: ref([]),
      checkedList: [
        {
          title:"hahaha",
          num:2,
          price:3000,
          thumb:"https://img.yzcdn.cn/vant/ipad.jpeg"
        },
        {
          title:"yayay",
          num:2,
          price:3415,
          thumb:"https://img.yzcdn.cn/vant/ipad.jpeg"
        },
        {
          title:"ccccc",
          num:2,
          price:4234,
          thumb:"https://img.yzcdn.cn/vant/ipad.jpeg"
        },
        {
          title:"nnnnn",
          num:2,
          price:436,
          thumb:"https://img.yzcdn.cn/vant/ipad.jpeg"
        },
        {
          title:"mmmm",
          num:2,
          price:3000,
          thumb:"https://img.yzcdn.cn/vant/ipad.jpeg"
        },
        {
          title:"ggggg",
          num:2,
          price:653,
          thumb:"https://img.yzcdn.cn/vant/ipad.jpeg"
        },
        {
          title:"lllll",
          num:2,
          price:764,
          thumb:"https://img.yzcdn.cn/vant/ipad.jpeg"
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


  const del = (index)=> {
    this.checkedList.splice(this.checkedList[index],1)
  }
    return { 
      state,
      allPrice,
      checkAll,
      checkboxGroup,
      del
    };
  }
};
</script>
<style lang='less' scoped>
@import "../../../assets/styles/style.less";
.haswish{
  margin-bottom: 60px;
  
}

</style>
