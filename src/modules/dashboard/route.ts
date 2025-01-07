import type { RouteItem } from '@/shared/types'

export const DashboardName = 'home'

export const dashboardRoutes: RouteItem[] = [
  {
    path: '/',
    name: DashboardName,
    component: () => import('./DashboardView.vue'),
  },
]
