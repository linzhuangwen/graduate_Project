import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/global.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'

import './assets/css/style.css'
import './assets/css/font-awesome.css'

import axios from './http'
// import {setCookie, getCookie, delCookie} from '@/router/cookie.js'

Vue.use(ElementUI, {size: 'small'})
Vue.prototype.$http = axios
Vue.config.productionTip = false
/* Vue.prototype.$cookieStore = {
  setCookie,
  getCookie,
  delCookie
} */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
