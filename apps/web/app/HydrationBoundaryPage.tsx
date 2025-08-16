import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { ReactNode } from 'react'

/**
 * React Query 쿼리 구성 타입
 *
 * @property queryKey - React Query에서 사용할 쿼리 키
 * @property queryFn  - 데이터를 가져오는 비동기 함수
 */
type QueryConfig = {
  queryKey: string[]
  queryFn: () => Promise<unknown>
}

/**
 * 서버 컴포넌트에서 React Query 쿼리를 미리 요청(prefetch)한 뒤,
 * dehydrate 상태를 클라이언트에 전달하기 위한 컴포넌트.
 *
 * @example
 * ```tsx
 * <HydrationBoundaryPage
 *   queries={[
 *     { queryKey: ['user'], queryFn: fetchUser },
 *     { queryKey: ['posts'], queryFn: fetchPosts },
 *   ]}
 * >
 *   <MyPage />
 * </HydrationBoundaryPage>
 * ```
 *
 * @param queries - 사전 요청할 쿼리들의 배열
 * @param children - HydrationBoundary로 감쌀 React 노드
 */
export const HydrationBoundaryPage = async ({
  queries,
  children,
}: {
  queries: QueryConfig[]
  children: ReactNode
}) => {
  const queryClient = new QueryClient()

  await Promise.all(
    queries.map(({ queryKey, queryFn }) =>
      queryClient.prefetchQuery({ queryKey, queryFn }),
    ),
  )

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  )
}
