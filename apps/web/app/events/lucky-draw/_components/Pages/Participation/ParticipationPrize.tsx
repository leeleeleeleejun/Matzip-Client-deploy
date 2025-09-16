import Image from 'next/image'
import { Text } from '@repo/ui/components/Text'
import { Column } from '@repo/ui/components/Layout'
import { ParticipationStatus } from '../../ParticipationStatus'

type Props = {
  description: string
  totalWinnersCount: number
  imageUrl: string
}

export const ParticipationPrize = ({
  description,
  totalWinnersCount,
  imageUrl,
}: Props) => (
  <Column className={'items-center gap-3'}>
    <Text fontSize={'2xl'} fontWeight={'bold'}>
      이번주 행운의 상품은?
    </Text>
    <Column className={'items-center gap-5'}>
      <Column className={'items-center'}>
        <Text variant={'title3'}>{description}</Text>
        <Text variant={'title3'}>총 당첨자: {totalWinnersCount}명</Text>
      </Column>
      <Image src={imageUrl} alt={'상품 이미지'} width={200} height={200} />
      <ParticipationStatus participantsCount={100} usedTicketsCount={100} />
    </Column>
  </Column>
)
