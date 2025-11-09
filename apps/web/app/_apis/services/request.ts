import axiosInstance from '@/_lib/axiosInstance'
import { API_PATH } from '@/_constants/path'
import {
  RequestSchema,
  RequestDetailSchema,
  type Request,
  type RequestDetail,
} from '@/_apis/schemas/request'

export const getRequests = async (): Promise<Request[]> => {
  const { data: response } = await axiosInstance.get(API_PATH.REQUEST.LIST)
  const { data } = response
  return RequestSchema.array().parse(data)
}

export const getRequestDetail = async (id: string): Promise<RequestDetail> => {
  const { data: response } = await axiosInstance.get(
    API_PATH.REQUEST.DETAIL(id),
  )
  const { data } = response
  return RequestDetailSchema.parse(data)
}
