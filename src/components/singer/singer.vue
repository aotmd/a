<template>
  <mt-loadmore :top-method="loadTop"
               　　　　:bottom-method="loadBottom"
               　　　　:bottom-all-loaded="allLoaded"
               　　　　ref="loadmore">
    　　　　<ul class="ul-box starth" id="ul-box" style="height: 6px">
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
    　　　　</ul>
   </mt-loadmore>
</template>

<script>
  import {Loadmore } from 'mint-ui'
    export default {
        name:'singer',
        data(){
            return {
              allLoaded: false,
            }
        },
      methods: {
        goto_detail(payload){　　//跳转到详情页
          this.$router.push({path: '/detail'})
        },
        loadTop() {　　//下拉刷新
          this.$refs.loadmore.onTopLoaded();
        },
        loadBottom() {　　//上拉加载　　　　　
          this.allLoaded = true;// 若数据已全部获取完毕
          this.$refs.loadmore.onBottomLoaded();
        },
      }
    }
</script>

<style>

</style>
