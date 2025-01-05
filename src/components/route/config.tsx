import type { RouteRecordRaw } from 'vue-router'
import { LoginView } from '../user'

export const unAuthRoutes: (RouteRecordRaw & {
  name: string
})[] = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/AboutView.vue'),
  },
]

export const authWhileList = unAuthRoutes.map((v) => v.name)

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => <span>home</span>,
  },
  ...unAuthRoutes,
]
