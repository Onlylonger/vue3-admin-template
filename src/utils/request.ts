import axios, { AxiosError, type InternalAxiosRequestConfig } from 'axios'
import { getToken } from '@/components/user'

export const request = axios.create({
  timeout: 10 * 1000,
  headers: {
    'Content-Type': 'application/json',
  },
  validateStatus: (status) => (status >= 200 && status < 300) || status === 304,
})

request.interceptors.request.use((conf) => {
  const config: InternalAxiosRequestConfig = { ...conf }
  conf.headers['Authorization'] = getToken()

  return config
})

request.interceptors.response.use(
  async (response) => {
    const responseType = response.config?.responseType

    if (responseType !== 'json') {
      return Promise.resolve(response)
    }

    return response
  },
  async (error: AxiosError) => {
    return Promise.reject(error)
  },
)
