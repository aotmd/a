<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import mHeader from './components/m-header/m-header.vue'
  import tab from './components/tab/tab.vue'
export default {
  name: 'app',
  components:{mHeader,tab},
//  created(){
//    this.$indicator.open('加载中...');
//  }
}
</script>

<style>

</style>
