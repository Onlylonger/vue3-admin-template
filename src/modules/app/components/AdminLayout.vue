<script setup lang="ts">
import { ElButton } from 'element-plus'
import { logout } from '@/modules/user'
import MenuList from './MenuList.vue'
import { ThemeSelect } from '@/modules/theme'

const handleLogout = () => {
  logout()
}
</script>

<template>
  <section class="flex h-full">
    <aside class="hidden sm:w-220px flex-shrink-0 sm:block bg-gray-100 overflow-y-scroll">
      <MenuList />
    </aside>
    <section class="flex flex-col flex-grow-1">
      <header class="flex-shrink-0 bg-gray-100 h-56px p-2 flex items-center justify-between">
        <div class="">askjflkasdj</div>
        <div class="">
          <ThemeSelect />
          <ElButton @click="handleLogout">Log out</ElButton>
        </div>
      </header>
      <main class="flex-grow-1"><RouterView /></main>
      <footer class="flex-shrink-0 bg-gray-100 h-48px flex justify-center items-center">
        Copyright MIT © 2021 Barry
      </footer>
    </section>
  </section>
</template>
