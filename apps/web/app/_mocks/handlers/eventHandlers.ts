import { http, HttpResponse } from 'msw'
import { event } from '../data/event'
import { API_PATH } from '@/_constants/path'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || ''

const addBaseUrl = (path: string) => {
  return `${BASE_URL}${path}`
}
export const EventHandlers = [
  http.get(addBaseUrl(API_PATH.EVENT.INFO), () => {
    return HttpResponse.json(event)
  }),
]
