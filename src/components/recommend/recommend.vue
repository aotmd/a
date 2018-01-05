<template>

    <div class="recommend">
      <loadmore>
        <swipe :arr="img" class="recommend-swire"></swipe>
        <div class="recommend-text">
            热门歌单推荐
        </div>
        <div class="recommend-content" v-for="(val,index) in list">
          <div class="recommend-content-img">
            <img :src="val.imgurl" alt="" width="60" height="60">
          </div>
          <div class="recommend-content-text">
            <h2>{{ val.creator.name }}</h2>
            <p>{{ val.dissname }}</p>
          </div>
        </div>
      </loadmore>
    </div>

</template>

<script>
  import { getRecommend,getDiscList } from '../../api/recommend'
  import loadmore from '../base/loadmore.vue'
  import { ERR_OK } from '../../api/config'
  import swipe from '../base/swipe'
    export default {
        name:'recommend',
        data(){
            return {
                num:5,
                page:1,
                img:[],
                list:[],
                result:[],
            }
        },
        created(){
          this._getRecommend();
          this._getDiscList();
        },
        methods:{
            _getRecommend(){
              getRecommend().then(res=>{
                if(res.code === ERR_OK ){
//                    console.log(res);
                    this.img = res.data.slider;
//                    console.log(this.img);
                }
              })
           },
            _getDiscList(){
              getDiscList().then(res=>{
                  console.log(res);
                  this.list  = res.data.list.slice(0,5);
              })
            }
        },
        components:{swipe,loadmore}
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  @import "../../common/stylus/variable"
  .recommend
    float left
    width 100%
    .recommend-text
      width 100%
      line-height 65px
      height 65px
      float left
      font-size $font-size-medium
      text-align center
      color $color-theme
    .recommend-content
      width 100%
      display: flex;
      align-items: center;
      padding 0 20px 20px 20px
      vertical-align middle
      .recommend-content-img
        float left
        margin-right 20px
      .recommend-content-text
        display: flex
        flex-direction: column
        justify-content: center
        flex: 1
        line-height: 20px
        overflow: hidden
        font-size: $font-size-medium
        font-weight: normal;
        h2
          margin-bottom 10px
        p
          color $color-text-d
</style>
