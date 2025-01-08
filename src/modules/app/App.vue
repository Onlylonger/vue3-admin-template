<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import { elementUILocale } from '../locale'
import { themeVars } from './theme/vars'

console.log(themeVars)
</script>

<template>
  <ElConfigProvider :locale="elementUILocale">
    <RouterView />
  </ElConfigProvider>
</template>

<style>
@import './styles/css/global.css';
</style>

<style lang="scss">
// @import url(./styles/scss/global.scss);
</style>
