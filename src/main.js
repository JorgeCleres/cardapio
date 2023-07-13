import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/axios'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.filter('dinheiro', valor => {
  return `R$${parseFloat(valor).toFixed(2)}`.replace('.',',')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
