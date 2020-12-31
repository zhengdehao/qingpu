<template>
  <div class="hasaddress">
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import { Toast } from 'vant';
import { defineComponent,reactive,ref,computed } from "vue";
import { getAddressListApi } from "../../../utils/api";
export default {
  // setup() {
  //   const state = reactive({})
  //   return {};
  // },
  data() {
    return {
      chosenAddressId: '1',
      list: [
        // {
        //   id: '1',
        //   name: '张三',
        //   tel: '13000000000',
        //   address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
        //   isDefault: true,
        // },
        // {
        //   id: '2',
        //   name: '李四',
        //   tel: '1310000000',
        //   address: '浙江省杭州市拱墅区莫干山路 50 号',
        // },
      ]
    };
  },
  mounted() {
    this.getAddressList();
  },
  methods: {
    onAdd() {
      this.$router.push({path:"/addressEdit"});
    },
    onEdit(item, index) {
      // Toast('编辑地址:' + index);
      console.log(item.id);
      this.$router.push({path:"/addressUpdate/" + item.id})
    },
    async getAddressList() {
      const res = await getAddressListApi({phone: localStorage.getItem("phone")});
      console.log(res);
      // this.list = res.addressList;
      
      this.list = res.addressList.map(item => {
          return {
            id: item.id,
            name: item.getName,
            tel: item.getPhone,
            address: item.address
          }
      });
      console.log(this.list)
    }
  },
};
</script>
<style lang='less' scoped>
@import "../../../assets/styles/style.less";
.hasaddress{
  margin-bottom: 60px;
  
}

</style>
