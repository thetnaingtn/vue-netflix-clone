import { createRouter, createWebHistory } from 'vue-router';


import Home from "@/views/Home";
import Signin from "@/views/Signin";
import Signup from "@/views/Signup";
import Browse from "@/views/Browse";

import * as ROUTES from '@/constants/routes';
import { user } from '@/composable/use-auth-listener';
import { unSubscribe, useAuthListener } from '../composable/use-auth-listener';

const routeNames = ["Sign Up", "Sign In", "Home"];


const routes = [
  {
    path: ROUTES.HOME,
    name: 'Home',
    component: Home,
  },
  {
    path: ROUTES.SIGN_IN,
    name: 'Sign In',
    component: Signin,
  },
  {
    path: ROUTES.SIGN_UP,
    name: 'Sign Up',
    component: Signup,
  },
  {
    path: ROUTES.BROWSE,
    name: 'Browse',
    component: Browse,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, _, next) => {
  await useAuthListener();
  if (!user.value && to.name === 'Browse') next({ name: "Sign In" })
  else if (user.value && routeNames.includes(to.name)) next({ name: "Browse" })
  else next()
})

router.beforeResolve(() => {
  unSubscribe && unSubscribe.value();
})


export default router
