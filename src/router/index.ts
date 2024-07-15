import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import CookiesService from '@/utils/cookiesService'
import { TokenKey } from '@/constants/cookie'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: {}
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const tn = CookiesService.get(TokenKey)
    if (tn) {
      next()
    } else {
      next('/login')
    }
  } else {
    if (to.name === 'register' || to.name === 'login') {
      const tn = CookiesService.get(TokenKey)
      if (!tn) {
        next()
      } else {
        next(from.path)
      }
    } else {
      next()
    }
  }
})

export default router
