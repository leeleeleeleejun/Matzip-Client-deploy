import { queryOptions } from '@tanstack/react-query'
import { getEventInfo } from '@/_apis/services/event'

export const EventQueryKeys = {
  all: () => ['event'] as const,
  info: () => [...EventQueryKeys.all(), 'info'] as const,
}

export const useEventQueries = {
  info: () =>
    queryOptions({
      queryKey: EventQueryKeys.info(),
      queryFn: getEventInfo,
    }),
}
