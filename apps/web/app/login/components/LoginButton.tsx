'use client'

import { Icon } from '@repo/ui/components/Icon'
import { Text } from '@repo/ui/components/Text'
import { getKakaoInga } from '@/_apis/services/login'

export const LoginButton = () => {
  const handleLogin = () => {
    if (typeof window === 'undefined' || !window.Kakao) {
      alert('카카오 SDK가 아직 로드되지 않았습니다. 잠시 후 다시 시도해주세요.')
      return
    }

    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY || '')
    }

    getKakaoInga()
  }

  return (
    <button
      onClick={handleLogin}
      className={'relative rounded-lg bg-[#FEE500] p-3 text-center'}
    >
      <Icon type={'kakaoLogo'} className={'absolute left-[20px]'} />
      <Text>카카오 로그인</Text>
    </button>
  )
}
