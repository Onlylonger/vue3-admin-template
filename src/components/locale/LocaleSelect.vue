<script setup lang="ts">
import { ElButton, ElDropdown, ElDropdownMenu, ElDropdownItem, ElTooltip } from 'element-plus'
import HeroiconsLanguage from '~icons/heroicons/language'
import { langOptions, local } from './useLocale'

const handleChange = (item) => {
  localStorage.setItem('lang', item.value)
  local.value = item.value
}
</script>

<template>
  <div>
    <ElDropdown trigger="click">
      <div>
        <ElTooltip content="test" :z-index="98">
          <ElButton text :icon="HeroiconsLanguage">{{ local }}</ElButton>
        </ElTooltip>
      </div>
      <template #dropdown>
        <ElDropdownMenu>
          <ElDropdownItem
            v-for="item in langOptions"
            :key="item.value"
            :value="item.value"
            class="mx-4px my-1px"
            @click="handleChange(item)"
          >
            {{ item.label }}
          </ElDropdownItem>
        </ElDropdownMenu>
      </template>
    </ElDropdown>
  </div>
</template>
