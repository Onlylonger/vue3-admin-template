import { ref, watch } from 'vue'
import { setTheme, getThemeStorage, addThemeClass } from './utils'
import { Theme } from './enum'

export const theme = ref<Theme>(getThemeStorage() || Theme.Auto)

window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
  if (e.matches) {
    addThemeClass(Theme.Light)
  } else {
    addThemeClass(Theme.Dark)
  }
})

watch(
  theme,
  (v) => {
    setTheme(v)
  },
  {
    immediate: true,
  },
)
