import Vue from 'vue'
<<<<<<< HEAD
import Router from 'vue-router'
<<<<<<< HEAD
import index from '@/components/index'
import axios from 'axios'
import zc from '@/components/zc'
Vue.use(Router,axios)
=======
// import index from '@/components/index'
// import sz from '@/components/sz'
import sz2 from '@/components/sz2'



Vue.use(Router)
>>>>>>> 1097d2b573e84d56f329fc1108ae0a3d1d893f22

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
<<<<<<< HEAD
      name: 'zc',
      component: zc
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
=======
      name: 'sz2',
      component: sz2
    }
>>>>>>> 1097d2b573e84d56f329fc1108ae0a3d1d893f22
  ]
=======
import axios from 'axios'
import Router from 'vue-router'
// import index from '@/components/index'
import logein from '@/components/logein'
import fenlei from '@/components/fenlei'
Vue.use(Router, axios)

export default new Router({
  routes: [{
    path: '/',
    name: 'fenlei',
    component: fenlei
  }]
>>>>>>> 76a4f995ab61758fa862bd6fcc3c8fb293782c65
})
