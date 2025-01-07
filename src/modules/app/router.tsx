import { createRouter, createWebHistory } from 'vue-router'
import { AuthEnum, checkUserInfo, getUserInfo } from '@/modules/user'
import type { NavigationGuardNext } from 'vue-router'
import type { RouteItem } from '@/shared/types'
import { LoginViewName, userRoutes } from '../user'
import { dashboardRoutes } from '../dashboard'

export const unAuthRoutes: RouteItem[] = [...userRoutes]

export const authRoutes: RouteItem[] = [...dashboardRoutes]

export const authWhileList = unAuthRoutes.map((v) => v.name)

export const routes: RouteItem[] = [...unAuthRoutes, ...authRoutes]

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

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, from, next) => {
  if (authWhileList.includes(to.name as any)) {
    next()
    return
  }
  await authGuardCheck(next)
})
