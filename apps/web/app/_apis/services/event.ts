import axiosInstance from '@/_lib/axiosInstance'
import { API_PATH } from '@/_constants/path'
import {
  EventByPrivateSchema,
  EventByPublicSchema,
  EventEntrySchema,
  EventResultSchema,
  type EventByEntry,
  type EventResult,
  type EventByPrivate,
  type EventByPublic,
} from '@/_apis/schemas/event'

export const getEventByPublic = async (): Promise<EventByPublic> => {
  const { data } = await axiosInstance.get(API_PATH.EVENT.INFO)
  return EventByPublicSchema.parse(data)
}

export const getEventByPrivate = async (): Promise<EventByPrivate> => {
  const { data } = await axiosInstance.get(API_PATH.EVENT.INFO)
  return EventByPrivateSchema.parse(data)
}

export const participationEvent = async (body: {
  eventId: string
  ticketsCount: number
}) => {
  const { data } = await axiosInstance.post(API_PATH.EVENT.PARTICIPATIONS, body)
  return data
}

export const getEventByEntries = async (): Promise<EventByEntry[]> => {
  const { data } = await axiosInstance.get(API_PATH.EVENT.ENTRIES)
  return EventEntrySchema.array().parse(data)
}

export const getEventResult = async (
  eventId: string,
): Promise<EventResult | null> => {
  const { data } = await axiosInstance.get(API_PATH.EVENT.RESULT(eventId))
  return EventResultSchema.parse(data)
}

// TODO: API 명세 확정 후 (인자, 반환값) 명확히 하기
export const submitWinnerPhoneNumber = async (
  eventId: string,
  phoneNumber: string,
): Promise<void> => {
  await axiosInstance.post(API_PATH.EVENT.APPLY(eventId), {
    phoneNumber,
  })
}
