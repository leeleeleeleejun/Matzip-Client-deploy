import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import { getCookie } from 'cookies-next'
import { getToken } from '@/_apis/services/login'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

axiosInstance.interceptors.request.use(
  async (config) => {
    const isServer = typeof window === 'undefined'
    let token: string | undefined

    if (isServer) {
      const { cookies } = await import('next/headers')
      token = await getCookie('accessToken', { cookies })
    } else {
      token = await getCookie('accessToken')
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => Promise.reject(error),
)

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  async (error: AxiosError): Promise<AxiosResponse | AxiosError> => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean
    }
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const { accessToken: newAccessToken } = await getToken()

        if (originalRequest.headers) {
          originalRequest.headers.Authorization = newAccessToken
            ? `Bearer ${newAccessToken}`
            : ''
        }

        return await axiosInstance(originalRequest)
      } catch (refreshError) {
        return Promise.reject(refreshError)
      }
    }
    return Promise.reject(error)
  },
)

export default axiosInstance
