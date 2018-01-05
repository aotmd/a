<template>
  <div class="swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(val,index) in arr" :key="index">
        <img :src="val.picUrl" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
    export default {
        name:'swipe',
        props:['arr']
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  *
    float left
  .swipe
    width 100%
    height 160px
    .mint-swipe
      width 100%
      .mint-swipe-indicators
        .mint-swipe-indicator
          opacity 1
</style>
