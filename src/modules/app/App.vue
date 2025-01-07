<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import { elementUILocale } from '../locale'
</script>

<template>
  <ElConfigProvider :locale="elementUILocale">
    <RouterView />
  </ElConfigProvider>
</template>

<style>
@import './styles/css/global.css';
</style>
