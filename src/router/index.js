import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/components/index'
// import sz from '@/components/sz'
import sz2 from '@/components/sz2'



Vue.use(Router)

export default new Router({
  routes: [
    /*  {
       path: '/',
       name: 'index',
       component: index
     }, */
    // {
    //   path: '/',
    //   name: 'sz',
    //   component: sz
    // },
     {
      path: '/',
      name: 'sz2',
      component: sz2
    }
  ]
})
