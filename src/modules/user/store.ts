import { getStorage, setStorage } from '@/shared/utils'
import { ref } from 'vue'
import { getUsereInfoApi, logInApi } from './api'
import { LoginViewName } from './route'
import { router } from '../app'
import { DashboardViewName } from '../dashboard'

export enum AuthEnum {
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
  const lastPath = getStorage('last_path')
  if (lastPath) {
    try {
      router.push(JSON.parse(lastPath))
    } catch (error) {
      router.push({
        name: DashboardViewName,
      })
    }
  } else {
    router.push({
      name: DashboardViewName,
    })
  }
}

export const logout = async () => {
  setStorage('token', '')
  setStorage(
    'last_path',
    JSON.stringify({
      name: router.currentRoute.value.name,
      query: router.currentRoute.value.query,
      params: router.currentRoute.value.params,
    }),
  )
  router.push({
    name: LoginViewName,
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
