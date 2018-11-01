import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import axios from 'axios'

Vue.use(Router,axios)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
