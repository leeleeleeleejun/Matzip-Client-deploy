import { queryOptions } from '@tanstack/react-query'
import { getEventInfo, getEventResult } from '@/_apis/services/event'

export const EventQueryKeys = {
  all: () => ['event'] as const,
  info: () => [...EventQueryKeys.all(), 'info'] as const,
  result: () => [...EventQueryKeys.all(), 'result'] as const,
}

export const useEventQueries = {
  info: () =>
    queryOptions({
      queryKey: EventQueryKeys.info(),
      queryFn: getEventInfo,
    }),
  result: () =>
    queryOptions({
      queryKey: EventQueryKeys.result(),
      queryFn: getEventResult,
    }),
}
