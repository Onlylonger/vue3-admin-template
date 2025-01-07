import { getStorage, setStorage } from '@/shared/utils'
import { ref } from 'vue'
import { getUsereInfoApi, logInApi } from './api'

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
