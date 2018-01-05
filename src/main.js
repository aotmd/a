
/**
 * abel-polyfil引入一定要写在最开始地方(对es6api转义)
 * */
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
/**
 * fastclick 消除在移动浏览器上触发click事件与一个物理Tap(敲击)之间的300延迟。
 * */
/**
 * 引入mint-ui和index.styl
 * */
import mint from './mintui/mint'
import './common/stylus/index.styl'


Vue.config.productionTip = false

/**
 * 实例化fastclick
*/
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
