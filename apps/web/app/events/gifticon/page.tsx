import Link from 'next/link'
import Image from 'next/image'
import { CLIENT_PATH } from '@/_constants/path'
import { Column } from '@repo/ui/components/Layout'
import { Text } from '@repo/ui/components/Text'
import { cn } from '@repo/ui/utils/cn'

const Page = () => {
  return (
    <div className={'grid grid-cols-2 gap-2.5 p-5'}>
      <Gifticon />
      <Gifticon />
      <Gifticon />
      <Gifticon />
    </div>
  )
}

export default Page

const Gifticon = () => (
  <Column
    as={Link}
    href={CLIENT_PATH.EVENT_GIFTICON_DETAIL('1')}
    className={cn(
      'p-2.5',
      'gap-2.5',
      'rounded-xl',
      'border-1 border-gray-200',
      'shadow-md',
    )}
  >
    <Image
      src={'/images/chicken.png'}
      alt={'기프티콘'}
      width={180}
      height={180}
    />
    <Column>
      <Text variant={'caption1'} className={'truncate'}>
        BBQ
      </Text>
      <Text fontSize={'sm'} fontWeight={'semibold'} className={'truncate'}>
        황금올리브 치킨
      </Text>
      <Text variant={'caption1'} className={'text-gray-200'}>
        2026.08.26 까지
      </Text>
    </Column>
  </Column>
)
