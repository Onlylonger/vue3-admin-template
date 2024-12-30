<script setup lang="ts">
import { ElButton, ElDropdown, ElDropdownMenu, ElDropdownItem, ElTooltip } from 'element-plus'
import LanguageIcon from '~icons/heroicons/language'
import { locale, changeLocale, LocalEnum } from './store'

const langOptions = [
  {
    label: '中文',
    value: LocalEnum.ZH_CN,
  },
  {
    label: '英文',
    value: LocalEnum.EN,
  },
]

const handleChange = (item: any) => {
  changeLocale(item.value)
}
</script>

<template>
  <div>
    <ElDropdown trigger="click">
      <div>
        <ElButton text :icon="LanguageIcon">{{ locale }}</ElButton>
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
