import { Column } from '@repo/ui/components/Layout'
import { SubTitle } from '@/places/[id]/_components'
import { Text } from '@repo/ui/components/Text'

export const RejectedReason = ({
  rejectedReason,
}: {
  rejectedReason: string
}) => (
  <Column className={'px-5 py-3'}>
    <SubTitle icon={'x'} title={'등록 거절 사유'} />
    <Text variant={'body2'} className={'whitespace-pre-wrap'}>
      {rejectedReason}
    </Text>
  </Column>)

