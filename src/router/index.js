import { createRouter, createWebHistory } from 'vue-router'

import * as ROUTES from '@/constants/routes';

const routes = [
  {
    path: ROUTES.HOME,
    name: 'Home',
    component: () => import("@/views/Home.vue")
  },
  {
    path: ROUTES.SIGN_IN,
    name: 'Sign In',
    component: () => import("@/views/Signin.vue")
  },
  {
    path: ROUTES.SIGN_UP,
    name: 'Sign Up',
    component: () => import("@/views/Signup.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
