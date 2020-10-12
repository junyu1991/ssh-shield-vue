import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import store from "./store/init";
import routes from "./router/init"

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: routes
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
