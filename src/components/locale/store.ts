import { computed, ref } from 'vue'
import { zhCn, en } from 'element-plus/es/locales.mjs'
import { getStorage, setStorage } from '@/utils'

export enum LocalEnum {
  ZH_CN = 'zh-CN',
  EN = 'en-US',
}

export const locale = ref(getStorage('lang') || LocalEnum.ZH_CN)

export const elementUILocale = computed(() => {
  if (locale.value === LocalEnum.EN) {
    return zhCn
  }
  return en
})

export const changeLocale = (value: LocalEnum) => {
  setStorage('lang', value)
  locale.value = value
}
