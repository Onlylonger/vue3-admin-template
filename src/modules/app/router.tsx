import { createRouter, createWebHashHistory } from 'vue-router'
import { AuthEnum, checkUserInfo, getUserInfo } from '@/modules/user'
import type { NavigationGuardNext } from 'vue-router'
import type { RouteItem } from '@/shared/types'
import { LoginViewName, userManagementRoute, loginRoute } from '../user'
import { dashboardRoutes } from '../dashboard'
import AdminLayout from './components/AdminLayout.vue'

export const unAuthRoutes: RouteItem[] = [loginRoute]

export const authRoutes: RouteItem[] = [
  {
    path: '/',
    name: 'auth-wrap',
    component: AdminLayout,
    children: [...dashboardRoutes, userManagementRoute],
  },
]

export const authWhileList = unAuthRoutes.map((v) => v.name)

export const routes: RouteItem[] = [...unAuthRoutes, ...authRoutes]

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

const authGuardCheck = async (next: NavigationGuardNext) => {
  const res = checkUserInfo()
  if (res.pass) {
    next()
  } else {
    if (res.reason === AuthEnum.TOKEN_NOT_FOUND) {
      next({ name: LoginViewName })
      // jump login
    }
    if (res.reason === AuthEnum.TOKEN_NEED_CHECK) {
      await getUserInfo()
      next()
      // resolve getUserInfoApi
    }
  }
}

router.beforeEach(async (to, from, next) => {
  if (authWhileList.includes(to.name as any)) {
    next()
    return
  }
  await authGuardCheck(next)
})
