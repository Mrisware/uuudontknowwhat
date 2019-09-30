import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {auth: true}
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {auth: true}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {auth: false}
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('store isLogin:', router.app.$options.store.state.isLogin)
  let isLogin = router.app.$options.store.state.isLogin
  if (to.meta.auth) {
    if (isLogin) {
      next()
    } else {
      if (from.name === 'Login') {
        next()
      } else {
        next({
          path: '/login'
        })
      }
    }
  } else {
    next()
  }
})
export default router
