import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'
import { ReactNode } from 'react'

/**
 * 서버 컴포넌트에서 React Query 쿼리를 미리 요청(prefetch)하고,
 * 클라이언트로 전달하여 초기 데이터를 사용할 수 있도록 해주는 컴포넌트입니다.
 *
 * @param queries - prefetch할 React Query 옵션 배열. `queryOptions()` 반환값을 전달하는 것이 안전합니다.
 * @param children - HydrationBoundary로 감쌀 React 노드
 *
 * @returns HydrationBoundary로 감싼 children
 *
 * @example
 * ```tsx
 * const queries = [useCategoryQueries.list()]
 *
 * <HydrationBoundaryPage queries={queries}>
 *   <Categories />
 * </HydrationBoundaryPage>
 * ```
 */
export const HydrationBoundaryPage = async <
  TQueryFnData,
  TError,
  TData,
  TQueryKey extends readonly unknown[],
>({
  queries,
  children,
}: {
  queries: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>[]
  children: ReactNode
}) => {
  const queryClient = new QueryClient()
  await Promise.all(queries.map((query) => queryClient.prefetchQuery(query)))

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  )
}
