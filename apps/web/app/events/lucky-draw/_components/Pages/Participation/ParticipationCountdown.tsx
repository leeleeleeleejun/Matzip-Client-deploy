import { Column } from '@repo/ui/components/Layout'
import { Text } from '@repo/ui/components/Text'

export const ParticipationCountdown = ({
  remainingTime,
}: {
  remainingTime: string
}) => (
  <Column className={'items-center gap-1'}>
    <Text fontSize={'sm'} fontWeight={'semibold'}>
      응모 종료까지 남은 시간
    </Text>
    <Text fontSize={'2xl'} fontWeight={'semibold'} className={'text-yellow'}>
      {remainingTime}
    </Text>
  </Column>
)
