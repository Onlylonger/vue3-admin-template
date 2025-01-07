import type { RouteItem } from '@/shared/types'
import LoginView from './LoginView.vue'

export const LoginViewName = 'login'

export const userRoutes: RouteItem[] = [
  {
    path: '/login',
    name: LoginViewName,
    component: LoginView,
  },
]
