<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ElConfigProvider, ElDatePicker } from 'element-plus'
import { LocaleSelect } from '../locale'
import { localEle } from '../locale/useLocale'
</script>

<template>
  <ElConfigProvider :locale="localEle">
    <header>
      header
      <LocaleSelect />
      <ElDatePicker type="date" placeholder="Pick a day" />
    </header>

    <RouterView />
  </ElConfigProvider>
</template>

<style>
@import './styles/css/global.css';
</style>
