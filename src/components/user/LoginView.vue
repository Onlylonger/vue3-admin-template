<script setup lang="ts">
import { ElCard } from 'element-plus'
// import PasswordForm from './PasswordForm.vue'

const bgThemeColor = '#fff'
const bgColor = '#fff'
</script>

<template>
  <div
    class="flex justify-center items-center relative w-100% h-100% overflow-hidden"
    :style="{ backgroundColor: bgColor }"
  >
    <WaveBg :theme-color="bgThemeColor" />
    <ElCard class="relative z-4 w-auto rd-12px">
      <div class="w-400px lt-sm:w-300px">
        <h3 class="text-center text-28px text-primary font-500 lt-sm:text-22px">title</h3>
        <main class="pt-24px">
          <h3 class="text-18px text-primary font-medium">label</h3>
          <div class="pt-24px">
            <Transition mode="out-in" appear>
              <!-- <PasswordForm /> -->
            </Transition>
          </div>
        </main>
      </div>
    </ElCard>
  </div>
</template>

<style scoped></style>
