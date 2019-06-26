import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const r = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/welcome'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/welcome',
          component: () => import('./views/Welcome.vue')
        },
        {
          path: '/users',
          component: () => import('./views/User.vue')
        },
        {
          path: '/roles',
          component: () => import('./views/Roles.vue')
        },
        {
          path: '/rights',
          component: () => import('./views/Rights.vue')
        },
        {
          path: '/goods',
          component: () => import('./views/Goods.vue')
        },
        {
          path: '/params',
          component: () => import('./views/Params.vue')
        },
        {
          path: '/categories',
          component: () => import('./views/Categories.vue')
        },
        {
          path: '/orders',
          component: () => import('./views/Orders.vue')
        },
        {
          path: '/reports',
          component: () => import('./views/Reports.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }

  ]
})
r.beforeEach((to, from, next) => {
  // login允许访问
  if (to.path === '/login') return next()
  // 取出令牌
  let token = sessionStorage.getItem('token')
  // 如有令牌
  if (token) return next()
  else return next('login')
})
export default r
