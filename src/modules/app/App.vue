<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ElConfigProvider, ElDatePicker } from 'element-plus'
import { LocaleSelect, elementUILocale } from '../locale'
import { AdminLayout } from '@/modules/layout'
</script>

<template>
  <ElConfigProvider :locale="elementUILocale">
    <!-- <AdminLayout>
      <template #header>
        <header class="h-30px">
          header
          <LocaleSelect />
          <ElDatePicker type="date" placeholder="Pick a day" />
        </header>
      </template>
    </AdminLayout>

    <div>nihao</div> -->

    <RouterView />
  </ElConfigProvider>
</template>

<style>
@import './styles/css/global.css';
</style>
