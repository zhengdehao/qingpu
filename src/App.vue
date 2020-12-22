<template>
<img :src="img" alt="">
    <home/>
    <router-link to="/"></router-link>
    <router-link to="/about"></router-link>
</template>

<script lang="ts">
import home from "./views/Home.vue";
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  components: { 
    home,
  }
})
</script>

<style lang="less">
div{
  h2 {
  font-size: 20px;
  color: red;
 }
}

  
</style>


