<template>
    <home/>
    <h2>LV</h2>
    <router-link to="/"></router-link>
    <router-link to="/about"></router-link>
    <van-button type="primary">主要按钮</van-button>
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
