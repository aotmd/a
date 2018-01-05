import Vue from 'vue'
import Router from 'vue-router'
import recommend from '../components/recommend/recommend'
import singer from '../components/singer/singer'
import rank from '../components/rank/rank'
import search from '../components/search/search'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/recommend'
    },
    {//推荐
      path:'/recommend',
      component:recommend
    },
    {//歌手
      path:'/singer',
      component:singer
    },
    {//排行
      path:'/rank',
      component:rank
    },
    {//搜索
      path:'/search',
      component:search
    },
  ]
})
