<script setup lang="ts">
import { DashboardName } from '@/modules/dashboard'
import { UserManagementViewName } from '@/modules/user'
import { ElMenu, ElSubMenu, ElMenuItem } from 'element-plus'

const menuList = [
  {
    label: '',
    icon: '',
    children: [],
  },
]
</script>

<template>
  <ElMenu class="h-full">
    <!-- <ElSubMenu index="1">
        <RouterLink :to="{ name: UserManagementViewName }">UserManagement</RouterLink>
      </ElSubMenu> -->
    <!-- <ElSubMenu index="2">
        <RouterLink :to="{ name: DashboardName }">Dashboard</RouterLink>
      </ElSubMenu> -->
    <ElMenuItem index="1">
      <RouterLink :to="{ name: UserManagementViewName }">UserManagement</RouterLink>
    </ElMenuItem>
    <ElMenuItem index="2">
      <RouterLink :to="{ name: DashboardName }">Dashboard</RouterLink>
    </ElMenuItem>
  </ElMenu>
</template>
