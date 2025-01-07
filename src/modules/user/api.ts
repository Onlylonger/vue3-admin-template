import { request } from '@/shared/utils'

export const logInApi = () => {
  return new Promise((re) => {
    setTimeout(() => {
      re({})
    }, 500)
  })
}

export const getUsereInfoApi = () => {
  return new Promise((re) => {
    setTimeout(() => {
      re({})
    }, 500)
  })
}

export function fetchCaptchaInfo() {
  return request.get('/api/captcha')
}
