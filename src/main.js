/*
 * @Author: zhi3210happy 
 * @Date: 2017-08-22 17:37:34 
 * @Last Modified by: zhi3210happy
 * @Last Modified time: 2017-08-24 12:13:20
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
//导入font-awesome
import './assets/css/font-awesome.css'
//导入我们自己的css文件
import './assets/css/style.css'
// 导入axios
import axios from 'axios'

Vue.config.productionTip = false

// 将axios挂载到vue对象的原型下边以实现全局通用
Vue.prototype.axios = axios

//注册两个全局过滤器
Vue.filter('number', value => {
  if (value > 10000) {
    return (value / 10000).toFixed(2) + '万'
  } else {
    return value
  }
})
Vue.filter('message', value => {
  if (value.length > 12) {
    return value.substr(0, 10) + '...'
  } else {
    return value
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
