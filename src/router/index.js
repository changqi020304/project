import Vue from 'vue'
import axios from 'axios'
import Router from 'vue-router'
// import index from '@/components/index'
import logein from '@/components/logein'
Vue.use(Router, axios)

export default new Router({
  routes: [{
    path: '/',
    name: 'logein',
    component: logein
  }]
})
