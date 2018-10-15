import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import xsk from '@/components/xsk'
import login from '@/components/logon'
import parent from '@/components/parent'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/parent',
      name: 'parent',
      component: parent
    },
    {
      path: '/xsk',
      name: 'xsk',
      component: xsk
    }, {
      path: "/login",
      name: "login",
      component: login
    }, {
      path: "/",
      redirect: "/index"
    }
  ]
})
router.beforeEach(function (to, from, next) {
  const nextRoute = ['index', 'xsk'];
  console.log(to.name)
  nextRoute.filter((item, index) => {
    if (item.indexOf(to.name) != -1) {
      if (localStorage.getItem("name")) {
        next()
      } else {
        router.push("/login")
      }
    } else {
      next()
    }
  })



  next()


});
export default router

