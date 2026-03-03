interface OpenDeepLinkParams {
  appScheme: string
  fallbackUrl: string
  timeout?: number
}

const DEEPLINK_TIMEOUT = 2500

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
 * - RN WebView 환경에서는 postMessage로 네이티브에 딥링크 전달
 */
export const openDeepLink = ({
  appScheme,
  fallbackUrl,
  timeout,
}: OpenDeepLinkParams): void => {
  const isRNWebView = isReactNativeWebView()

  // RN WebView 환경에서는 postMessage로 네이티브에 전달
  if (isRNWebView) {
    const webView = (
      window as {
        ReactNativeWebView?: { postMessage: (message: string) => void }
      }
    ).ReactNativeWebView
    if (webView) {
      webView.postMessage(
        JSON.stringify({
          type: 'OPEN_DEEP_LINK',
          url: appScheme,
          fallbackUrl: fallbackUrl,
        }),
      )
      return
    }
  }

  // 일반 브라우저/PWA 환경
  const effectiveTimeout = timeout ?? DEEPLINK_TIMEOUT
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
