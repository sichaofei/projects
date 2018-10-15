import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Foot from '@/components/foot'
import Shop from '@/components/shop'
import Center from '@/components/center'
import Car from '@/components/car'
import detail from '@/components/detail'
Vue.use(Router)

export default new Router({
  routes: [
    // { path: "/", redirect: '/home' },
    {
      path: '/',
      name: 'Foot',
      component: Foot,
      children: [
        {
          path: '/shop',
          name: 'Shop',
          component: Shop,

        },
        {
          path: '/car',
          name: 'Car',
          component: Car,

        },
        {
          path: '/center',
          name: 'Center',
          component: Center,

        },
        {
          path: '/',
          name: 'Home',
          component: Home,

        },
      ]
    },
    {
      path: "/xq/:id",
      component:detail
    }

  ]
})
