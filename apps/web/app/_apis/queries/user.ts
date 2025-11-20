import { queryOptions } from '@tanstack/react-query'
import { getUserData } from '@/_apis/services/user'

export const UserQueryKeys = {
  all: () => ['user'] as const,
  detail: () => [...UserQueryKeys.all(), 'detail'] as const,
}

export const useUserQueries = {
  detail: () =>
    queryOptions({
      queryKey: UserQueryKeys.detail(),
      queryFn: getUserData,
    }),
}
