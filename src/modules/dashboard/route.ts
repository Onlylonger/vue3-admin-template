import type { RouteItem } from '@/shared/types'

export const DashboardViewName = 'home'

export const dashboardRoutes: RouteItem[] = [
  {
    path: '/',
    name: DashboardViewName,
    component: () => import('./DashboardView.vue'),
  },
]
