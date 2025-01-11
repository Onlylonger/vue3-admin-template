import { getStorage, setStorage } from '@/shared/utils'
import { Theme } from './enum'

const themeList = [Theme.Light, Theme.Dark]

export function getThemeStorage(): Theme {
  return (getStorage('theme') || themeList[0]) as Theme
}
export function setThemeStorage(val: Theme) {
  return setStorage('theme', val)
}

export function addThemeClass(classname: Theme) {
  const cl = document.documentElement.classList
  cl.remove(...themeList)
  cl.add(classname)
}

export function setTheme(val: Theme) {
  if (val === Theme.Auto) {
    const media = window.matchMedia('(prefers-color-scheme: light)')
    if (media.matches) {
      addThemeClass(Theme.Light)
    } else {
      addThemeClass(Theme.Dark)
    }
  } else {
    addThemeClass(val)
  }
  setThemeStorage(val)
}
