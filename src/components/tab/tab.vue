<template>
  <div class="tab">
      <router-link to="/recommend" tag="div" class="item">
        <span>推荐</span>
      </router-link>
      <router-link to="/singer" tag="div" class="item">
        <span>歌手</span>
      </router-link>
      <router-link to="/rank" tag="div" class="item">
        <span>排行</span>
      </router-link>
      <router-link to="/search" tag="div" class="item">
        <span>搜索</span>
      </router-link>
  </div>
</template>

<script>
    export default {
        name:'tab'
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  @import "../../common/stylus/variable"
  .tab
    width 100%
    display: flex
    height 44px
    .item
      line-height 44px;
      flex: 1
      font-size $font-size-medium
      text-align center
      span
        color $color-text-l
        padding-bottom 6px
      &.router-link-active
        span
          color $color-theme
          border-bottom 2px solid $color-theme
</style>
