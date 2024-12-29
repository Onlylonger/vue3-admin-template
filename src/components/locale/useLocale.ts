import { computed, ref } from 'vue'
import { zhCn, en } from 'element-plus/es/locales.mjs'

enum Local {
  ZhCn = 'zh-CN',
  En = 'en-US',
}

export const langOptions = [
  {
    label: '中文',
    value: Local.ZhCn,
  },
  {
    label: '英文',
    value: Local.En,
  },
]

export const local = ref(localStorage.getItem('lang') || Local.ZhCn)

export const localEle = computed(() => {
  if (local.value === Local.ZhCn) {
    return zhCn
  }
  return en
})
