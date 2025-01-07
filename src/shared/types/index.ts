import type { RouteRecordRaw } from 'vue-router'

export type RouteItem = RouteRecordRaw & {
  name: string
}
