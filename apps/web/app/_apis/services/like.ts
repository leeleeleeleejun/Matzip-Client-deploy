import axiosInstance from '@/_lib/axiosInstance'
import { API_PATH } from '@/_constants/path'

type Response = {
  placeId: string
  message: string
}

export const addLike = async (placeId: string): Promise<Response> => {
  const { data: response } = await axiosInstance.post(
    API_PATH.PLACES.LIKE.POST(placeId),
  )
  const { data } = response
  return data
}

export const removeLike = async (placeId: string): Promise<Response> => {
  const { data: response } = await axiosInstance.delete(
    API_PATH.PLACES.LIKE.DELETE(placeId),
  )
  const { data } = response
  return data
}
