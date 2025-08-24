'use client'

import { useSearchParams } from 'next/navigation'

/**
 * 현재 URL의 쿼리 파라미터를 페이지 리로드 없이 수정할 수 있는 훅입니다.
 *
 * 이 훅은 Next.js의 `useSearchParams`를 사용해 현재 쿼리 파라미터를 읽어오고,
 * 특정 파라미터를 업데이트하는 함수를 반환합니다.
 * 내부적으로 `window.history.pushState`를 사용하기 때문에 페이지 새로고침 없이
 * 브라우저 주소창의 URL만 변경되며, 브라우저 뒤로가기 기록은 유지됩니다.
 *
 * @example
 * ```tsx
 * const updateQueryParam = useUpdateQueryParam()
 *
 * // "step" 파라미터를 "2"로 업데이트
 * updateQueryParam("step", "2")
 * ```
 */
export const useUpdateQueryParam = () => {
  const searchParams = useSearchParams()

  return (name: string, value: string) => {
    const urlSearchParams = new URLSearchParams(searchParams.toString())
    urlSearchParams.set(name, value)
    window.history.pushState(null, '', `?${urlSearchParams.toString()}`)
  }
}
