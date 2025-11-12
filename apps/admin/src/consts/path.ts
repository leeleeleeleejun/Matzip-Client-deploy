export const BASE_URL = process.env.NEXT_PUBLIC_API_URL || ''

export const API_PATH = {
  REQUEST: {
    GET: {
      LIST: `/requests/places`,
      DETAIL: (id: string | number) => `/requests/places/${id}`,
    },
    POST: (id: string | number) => `/requests/places/${id}/review`,
  },
} as const

export const CLIENT_PATH = {
  MAIN: '/',
  REQUEST_DETAIL: (id: string | number) => `/requests/${id}`,
} as const
