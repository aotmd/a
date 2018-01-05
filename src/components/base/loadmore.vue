<template>
  <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
    <slot></slot>
  </mt-loadmore>
</template>

<script>
    import { Loadmore } from 'mint-ui';
    export default {
        name:'Loadmore',
        data(){
            return {
              allLoaded:false,
              page:1,
              num:5
            }
        },
        methods:{
          loadTop() {
              /**
               * 下拉时调用
               * */
            let _this = this;
            setTimeout(function(){
              _this.$refs.loadmore.onTopLoaded();
            },2000)
          },
          loadBottom() {
              /**
               * 上拉时调用
               * */
            console.log(123)
            let _this = this;
            setTimeout(function(){
              /**
               * this.$refs.loadmore.onBottomLoaded();重新定位位置
               * this.allLoaded为true时禁止上拉
               * */
              _this.allLoaded = false;
              _this.$refs.loadmore.onBottomLoaded();
            },2000)
          }
        }
      }
</script>

<style>

</style>
