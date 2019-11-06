import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import axios from 'axios'

Vue.prototype.$http=axios

Vue.config.productionTip = false

//设置请求拦截
axios.interceptors.request.use(config=>{
  config.url = "/api" + config.url;
  return config;
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
