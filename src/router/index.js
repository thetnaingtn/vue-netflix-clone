import { createRouter, createWebHistory } from 'vue-router'

import * as ROUTES from '@/constants/routes';
const user = localStorage.getItem("authUser");

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
  {
    path: ROUTES.BROWSE,
    name: 'Browse',
    component: () => import("@/views/Browse.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  let routeNames = ["Sign In", "Sign Up", "Home"];
  if (routeNames.includes(to.name) && user) {
    next({ name: "Browse" })
  } else if (to.name === 'Browse' && !user) {
    next({ name: "Sign In" })
  } else {
    next()
  }
})

export default router
