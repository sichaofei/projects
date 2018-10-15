import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/home/avv"
import Foot from "@/components/public/foot"
import Server from '@/components/server/server'
import Live from '@/components/live/live'
import My from '@/components/my/my'
import Active from '@/components/home/nav/active'
import Bd from '@/components/home/nav/bd'
import Ask from '@/components/home/nav/ask'
import Other from '@/components/home/nav/other'
import Activedetail from '@/components/home/nav/activedetail'
import Quan from '@/components/server/quan'
import Shop from '@/components/live/shop'
import Login from '@/components/loginReg/login'
import Reg from '@/components/loginReg/reg'
import Car from '@/components/live/car'
import Sockett from '@/components/socket/index'
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'foot',
      component: Foot,
      children: [
        {
          path: "/",
          name: "home",
          component: Home
        },
        {
          path: "/server",
          component: Server
        },
        {
          path: "/live",
          component: Live
        },
        {
          path: "/my",
          component: My
        }
      ]
    },
    {
      path: "/active/:id",
      component: Active
    },
    {
      path: "/ask/:id",
      component: Ask
    },
    {
      path: "/bd/:id",
      component: Bd
    },
    {
      path: "/all/:id",
      component: Other
    },
    {
      path: "/active/detail/:id",
      component: Activedetail
    },
    {
      path: "/server/quan",
      component: Quan
    },
    {
      path: "/shop/:id",
      component: Shop
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/reg",
      component: Reg
    },
    {
      path: "/shopCar",
      component: Car
    },
    {
      path: "/sessage",
      component: Sockett
    }
  ]
})
// // 全局路由守卫
// router.beforeEach((to, from, next) => {
//   console.log('navigation-guards');
//   // to: Route: 即将要进入的目标 路由对象
//   // from: Route: 当前导航正要离开的路由
//   // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

//   const nextRoute = ['home'];
//   // 未登录状态；当路由到nextRoute指定页时，跳转至login
//   if (nextRoute.indexOf(to.name) >= 0) {
//     console.log('what fuck');
//     router.push({ name:'login' })
//   }
//   // 已登录状态；当路由到login时，跳转至home 
//   if (to.name == 'login') {
//     router.push({ name: 'home' });
//   }
//   next();
// });
export default router