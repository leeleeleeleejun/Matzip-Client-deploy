import { queryOptions } from '@tanstack/react-query'
import { getRequestDetail, getRequests } from '@/_apis/services/request'

export const RequestQueryKeys = {
  all: () => ['request'] as const,
  list: () => [...RequestQueryKeys.all(), 'list'] as const,
  detail: () => [...RequestQueryKeys.all(), 'detail'] as const,
}

export const useRequestQueries = {
  list: () =>
    queryOptions({
      queryKey: RequestQueryKeys.list(),
      queryFn: getRequests,
    }),
  detail: (id: string) =>
    queryOptions({
      queryKey: RequestQueryKeys.detail(),
      queryFn: () => getRequestDetail(id),
    }),
}
