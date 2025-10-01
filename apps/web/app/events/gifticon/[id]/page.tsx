import { Column } from '@repo/ui/components/Layout'
import { Text } from '@repo/ui/components/Text'
import Image from 'next/image'

const Page = () => {
  return (
    <Column className={'items-center gap-3 p-5'}>
      <Text fontSize={'sm'} fontWeight={'semibold'} className={'text-gray-300'}>
        유효기간 연장은 불가하니, 꼭 기간 내에 사용해 주세요!
      </Text>
      <Image
        src={'/images/gifticon.png'}
        alt={'기프티콘'}
        width={350}
        height={650}
      />
    </Column>
  )
}

export default Page
