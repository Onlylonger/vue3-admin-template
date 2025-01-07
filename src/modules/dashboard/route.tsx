import type { RouteItem } from '@/shared/types'

export const dashboardRoutes: RouteItem[] = [
  {
    path: '/',
    name: 'home',
    component: () => <span>home</span>,
  },
]
