<template>
    <h2>LV</h2>
    <router-link to="/"></router-link>
    <router-link to="/about"></router-link>
    <header>
      <ul>
        <li v-for="(item, index) in navList" :key="index">{{ item }}</li>
      </ul>
    </header>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      navList:["首页","分类","购物车","我的"]
    }
  },
  components: {
    
  }
}
</script>
