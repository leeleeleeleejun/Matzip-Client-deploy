interface OpenDeepLinkParams {
  appScheme: string
  fallbackUrl: string
  timeout?: number
}

const DEEPLINK_TIMEOUT = 2500
const RN_WEBVIEW_TIMEOUT = 1000 // RN WebView는 네이티브 처리가 빠르므로 타임아웃 단축

/**
 * React Native WebView 환경인지 확인
 */
const isReactNativeWebView = (): boolean => {
  if (typeof window === 'undefined') return false
  return !!(window as { ReactNativeWebView?: unknown }).ReactNativeWebView
}

/**
 * 딥링크 실행 유틸 함수
 * - 앱이 설치되어 있으면 앱 실행
 * - 앱이 없으면 timeout 이후 fallbackUrl로 이동
 * - 앱 실행 시 페이지가 백그라운드로 가면 fallback 취소
 * - RN WebView 환경에서는 네이티브가 빠르게 처리하므로 타임아웃 단축
 */
export const openDeepLink = ({
  appScheme,
  fallbackUrl,
  timeout,
}: OpenDeepLinkParams): void => {
  const isRNWebView = isReactNativeWebView()

  // RN WebView는 네이티브에서 shouldOverrideUrlLoading으로 즉시 처리되므로 타임아웃 단축
  const effectiveTimeout =
    timeout ?? (isRNWebView ? RN_WEBVIEW_TIMEOUT : DEEPLINK_TIMEOUT)

  const startTime = Date.now()

  const handleVisibilityChange = () => {
    if (document.hidden) {
      clearTimeout(fallbackTimeout)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }

  document.addEventListener('visibilitychange', handleVisibilityChange)

  const fallbackTimeout = setTimeout(() => {
    document.removeEventListener('visibilitychange', handleVisibilityChange)
    if (!document.hidden && Date.now() - startTime >= effectiveTimeout) {
      window.location.href = fallbackUrl
    }
  }, effectiveTimeout)

  window.location.href = appScheme
}
