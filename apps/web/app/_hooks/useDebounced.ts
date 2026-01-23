import { useCallback, useEffect, useRef } from 'react'

/**
 * 함수 실행을 지정된 시간만큼 지연시키는 훅 (Debounce)
 *
 * @template T - 실행할 함수의 타입
 * @param func - 실행할 함수 (콜백)
 * @param delay - 지연 시간 (ms)
 * @returns 디바운스 처리된 실행 함수
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDebounced = <T extends (...args: any[]) => any>(
  func: T,
  delay: number = 300,
) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const funcRef = useRef(func)

  useEffect(() => {
    funcRef.current = func
  }, [func])

  const trigger = useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(async () => {
        try {
          // 최신 함수 호출
          await funcRef.current(...args)
        } catch (error) {
          console.error('Debounced function failed:', error)
        }
      }, delay)
    },
    [delay],
  )

  // 언마운트 시 타이머 클리어
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return trigger
}
