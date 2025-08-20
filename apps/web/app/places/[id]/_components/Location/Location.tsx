import { SubTitle } from '../SubTitle'
import { Column } from '@repo/ui/components/Layout'

export const Location = () => {
  return (
    <Column className={'gap-1.5'}>
      <SubTitle icon={'pin'} title={'위치'} />
      <div className={'h-[150px] rounded-xl bg-gray-100'}>지도</div>
    </Column>
  )
}
