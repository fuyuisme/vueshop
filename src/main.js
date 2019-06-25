import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

import './assets/globel.css'

Vue.use(ElementUI)
Vue.use(VueAxios, axios)

Vue.axios.defaults.baseURL = 'http://127.0.0.1:11333/api/private/v1'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
