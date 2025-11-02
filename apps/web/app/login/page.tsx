import { Icon } from '@repo/ui/components/Icon'
import { Column } from '@repo/ui/components/Layout'
import { Text } from '@repo/ui/components/Text'

const LoginPage = () => {
  return (
    <Column className={'h-full px-5 py-10'}>
      <Column className={'my-auto items-center pb-5'}>
        <Icon type={'logo'} size={150} className={'mb-2'} />
        <Text fontSize={'2xl'}>공주대학교</Text>
        <Text fontSize={'2xl'} fontWeight={'bold'}>
          맛집
        </Text>
      </Column>
      <button className={'relative rounded-lg bg-[#FEE500] p-3'}>
        <Icon type={'kakaoLogo'} className={'absolute left-[20px]'} />
        <Text>카카오 로그인</Text>
      </button>
    </Column>
  )
}

export default LoginPage
