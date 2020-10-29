import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import store from "./store/init";
import routes from "./router/init"
import axios from "axios"
import HttpUtil from "./util/HttpUtil";

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: routes
})

function init() {
    document.getElementById("errorBlock").style.display = 'none'
    let baseURL = ""
    let util = undefined;
    axios.get('./Config.json')
      .then((response) => {
          if(response.status === 200) {

              baseURL = response.data.frontServer;
              console.log(baseURL)
              util = new HttpUtil(baseURL)
              new Vue({
                  store,
                  router,
                  render: h => h(App),
              }).$mount('#app')

              Vue.prototype.$httpUtil = util
          } else {
              console.log(response.status)
              document.getElementById("errorBlock").style.display = 'block'
          }
      }).catch(()=>{
          document.getElementById("errorBlock").style.display = 'block'
      })
}

init();



