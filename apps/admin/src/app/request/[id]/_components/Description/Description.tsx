import { Column } from '@repo/ui/components/Layout'
import { Chip } from '@repo/ui/components/Chip'
import { Text } from '@repo/ui/components/Text'
import { RequestDetail } from '../../_api/types'

type Props = {
  description: RequestDetail['description']
}

export const Description = ({ description }: Props) => {
  return (
    <Column className={'gap-1.5'}>
      <Text>소개</Text>
      <Text variant={'body2'} className={'whitespace-pre-wrap'}>
        {description}
      </Text>
      <div>
        <Chip icon={'calculator'} label={'가성비 좋은'} />
      </div>
    </Column>
  )
}
