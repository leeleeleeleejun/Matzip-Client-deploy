import { API_PATH, BASE_URL } from '@/consts/path'
import type { RequestDetail, RequestReview } from '../types'

export const getRequestDetail = async (id: string): Promise<RequestDetail> => {
  const response = await fetch(BASE_URL + API_PATH.REQUEST.GET.DETAIL(id))
  const { data } = await response.json()
  return data
}

export const requestReview = async (id: number, review: RequestReview) => {
  const response = await fetch(BASE_URL + API_PATH.REQUEST.POST(id), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(review),
  })
  if (!response.ok) {
    throw new Error()
  }

  return response.json()
}
