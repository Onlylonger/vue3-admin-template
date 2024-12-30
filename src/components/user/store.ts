import { getStorage, setStorage } from '@/utils'
import { ref } from 'vue'
import { getUsereInfoApi, logInApi } from './api'
import type { NavigationGuardNext } from 'vue-router'
import { router } from '@/vue-plugins'

enum AuthEnum {
  TOKEN_NEED_CHECK,
  TOKEN_NOT_FOUND,
  TOKEN_VALID,
}

export function getToken() {
  return getStorage('token')
}

export const userInfo = ref()

export function changeUserInfo() {
  //
}

export const login = async () => {
  await logInApi()
  setStorage('token', 'mocktoken')
  router.replace({
    name: 'home',
  })
}

export const checkUserInfo = () => {
  if (getToken()) {
    if (userInfo.value?.id) {
      return {
        pass: true,
        reason: AuthEnum.TOKEN_VALID,
      }
    } else {
      return {
        pass: false,
        reason: AuthEnum.TOKEN_NEED_CHECK,
      }
    }
  } else {
    return {
      pass: false,
      reason: AuthEnum.TOKEN_NOT_FOUND,
    }
  }
}

export const getUserInfo = async () => {
  await getUsereInfoApi()
  userInfo.value = {
    username: 'barry',
    id: 1,
  }
}

export const authGuardCheck = async (next: NavigationGuardNext) => {
  const res = checkUserInfo()
  if (res.pass) {
    next()
  } else {
    if (res.reason === AuthEnum.TOKEN_NOT_FOUND) {
      next({ name: 'login' })
      // jump login
    }
    if (res.reason === AuthEnum.TOKEN_NEED_CHECK) {
      await getUserInfo()
      next()
      // resolve getUserInfoApi
    }
  }
}
