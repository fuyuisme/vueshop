import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

import './assets/global.css'

Vue.use(ElementUI)
Vue.use(VueAxios, axios)

Vue.axios.defaults.baseURL = 'http://127.0.0.1:11333/api/private/v1'

// Vue.axios.interceptor.request.use(function (config) {
//   config.headers = { Authorization: sessionStorage.getItem('token') }
//   return config
// })
// Add a request interceptor
Vue.axios.interceptors.request.use(function (config) {
  // 这里的代码，在每次发送 AJAX 之前都会被自动执行
  // config ：将要发送的 ajax 的数据对象
  // 向数据对象中添加一个协议头，添加上令牌
  // 添加一个 Authorization: xxxx 的协议头
  config.headers = { Authorization: sessionStorage.getItem('token') }
  return config
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
