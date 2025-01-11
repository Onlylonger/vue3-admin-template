<script setup lang="ts">
import { DashboardViewName } from '@/modules/dashboard'
import { UserManagementViewName } from '@/modules/user'
import { ElMenu, ElSubMenu, ElMenuItem } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'

const menuList = [
  {
    label: 'UserManagement',
    icon: '',
    key: UserManagementViewName,
    children: [],
  },
  {
    label: 'Dashboard',
    icon: '',
    key: DashboardViewName,
    children: [],
  },
  {
    label: 'Demo',
    icon: '',
    key: 'demo',
    children: [
      {
        label: 'test',
        icon: '',
        key: 'test',
      },
      {
        label: 'test1',
        icon: '',
        key: 'test1',
      },
    ],
  },
]

const router = useRouter()
const route = useRoute()

console.log(route, router)

const handleSelect = (val: string) => {
  if (router.hasRoute(val)) {
    router.push({
      name: val,
    })
    return
  }

  console.log(`name: ${val}  not exist in routes config`)
}
</script>

<template>
  <ElMenu class="h-full" @select="handleSelect" :default-active="route.name as string">
    <template v-for="item in menuList">
      <ElSubMenu v-if="item.children && item.children.length > 0" :index="item.key">
        <template #title>
          <span class="ib-ellipsis">{{ item.label }}</span>
        </template>
        <ElMenuItem v-for="sub in item.children" :index="sub.key">
          {{ sub.label }}
        </ElMenuItem>
      </ElSubMenu>
      <ElMenuItem v-else :index="item.key">
        <span class="ib-ellipsis">{{ item.label }}</span>
      </ElMenuItem>
    </template>
  </ElMenu>
</template>

<style scoped>
.ib-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
}
</style>
