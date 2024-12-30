<script setup lang="ts">
import { login } from '@/components/user'
import { ElButton } from 'element-plus'

const handleLogin = () => {
  console.log(333)
  login()
}
</script>

<template>
  <div class="bg-red">
    <ElButton @click="handleLogin">Login</ElButton>
  </div>
</template>
