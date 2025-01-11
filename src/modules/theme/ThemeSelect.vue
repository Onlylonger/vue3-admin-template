<script setup lang="ts">
import { ElDropdown, ElDropdownItem, ElDropdownMenu } from 'element-plus'
import { theme } from './store'
import { Theme } from './enum'

const handleChangeTheme = (command: Theme) => {
  theme.value = command
}

const list = [
  {
    icon: '',
    label: 'Auto',
    value: Theme.Auto,
  },
  {
    icon: '',
    label: 'Light',
    value: Theme.Light,
  },
  {
    icon: '',
    label: 'Dark',
    value: Theme.Dark,
  },
]
</script>

<template>
  <div>
    <ElDropdown @command="handleChangeTheme">
      <span class="ElDropdown-link demo">
        {{ theme }}
        <!-- <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon> -->
      </span>
      <template #dropdown>
        <ElDropdownMenu>
          <ElDropdownItem v-for="item in list" :command="item.value">{{
            item.label
          }}</ElDropdownItem>
        </ElDropdownMenu>
      </template>
    </ElDropdown>
  </div>
</template>

<style>
.demo {
  color: var(--demo);
}

:root {
  --demo: red;
}

:root.dark {
  --demo: blue;
}
</style>
