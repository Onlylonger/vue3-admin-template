import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/components/route'
import { authGuardCheck } from '@/components/user'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, from, next) => {
  if (['login'].includes(to.name as any)) {
    next()
    return
  }
  await authGuardCheck(next)
})
