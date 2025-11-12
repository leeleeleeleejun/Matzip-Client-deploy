import { API_PATH, BASE_URL } from '@/consts/path'
import { Request } from '@/app/_api/types'

export const getRequests = async (): Promise<Request[]> => {
  const response = await fetch(BASE_URL + API_PATH.REQUEST.GET.LIST)
  const { data: res } = await response.json()
  return res
}
