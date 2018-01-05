
<template>

  <div class="m-header">
    <div class="ico-img"></div>
    <h1 class="text">MUSIC</h1>
    <a href="" class="mine">
      <i class="icon-mine"></i>
    </a>
  </div>

</template>

<script>
    export default {
        name:'m-header'
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  @import "../../common/stylus/variable"
  @import "../../common/stylus/mixin"
  .m-header
    position relative
    height 44px
    width 100%
    color $color-theme //黄色
    text-align center
    font-size 0
    .ico-img
      bg-image('logo')
      display inline-block
      width 30px
      height 32px
      background-size 30px 32px
      vertical-align top
      margin 6px 9px 0 0
    .text
      display inline-block
      line-height 44px
      font-size $font-size-large //18px
      vertical-align top
      color $color-theme
    .mine
      position absolute
      top 0
      right 0
      .icon-mine
        display: block
        padding: 12px
        font-size: 20px
        color: $color-theme
</style>
