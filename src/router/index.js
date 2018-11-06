import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import zc from '@/components/zc'
import logein from '@/components/logein'
import fenlei from '@/components/fenlei'
import sz2 from '@/components/sz2'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'sz2',
    component: sz2
  }, ]
})
