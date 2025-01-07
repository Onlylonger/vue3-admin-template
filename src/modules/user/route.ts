import type { RouteItem } from '@/shared/types'
import LoginView from './LoginView.vue'

export const LoginViewName = 'login'
export const UserManagementViewName = 'user-management'

export const loginRoute: RouteItem = {
  path: '/login',
  name: LoginViewName,
  component: LoginView,
}

export const userManagementRoute: RouteItem = {
  path: '/user-management',
  name: UserManagementViewName,
  component: () => import('./UserManagementView.vue'),
}
