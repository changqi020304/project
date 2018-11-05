import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import axios from 'axios'
import zc from '@/components/zc'
Vue.use(Router,axios)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'zc',
      component: zc
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
  ]
})
