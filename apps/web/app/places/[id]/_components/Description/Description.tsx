import { SubTitle } from '../SubTitle'
import { Column } from '@repo/ui/components/Layout'
import { Chip } from '@repo/ui/components/Chip'
import { Text } from '@repo/ui/components/Text'
import { PlaceDetail } from '@/_apis/schemas/place'

type Props = {
  description: PlaceDetail['description']
}

export const Description = ({ description }: Props) => {
  return (
    <Column className={'gap-1.5'}>
      <SubTitle icon={'smile'} title={'소개'} />
      <Text variant={'body2'} className={'whitespace-pre-wrap'}>
        {description}
      </Text>
      <div>
        <Chip icon={'calculator'} label={'가성비 좋은'} />
      </div>
    </Column>
  )
}
