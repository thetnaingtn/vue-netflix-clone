import { createRouter, createWebHistory } from 'vue-router'

import * as ROUTES from '@/constants/routes';

const routes = [
  {
    path: ROUTES.HOME,
    name: 'Home',
    component: () => import("@/views/Home.vue")
  },
  {
    path: ROUTES.SIGN_UP,
    name: 'Sign up',
    component: () => import("@/views/Home.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
