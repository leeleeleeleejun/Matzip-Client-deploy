import { Text } from '@repo/ui/components/Text'
import { cn } from '@repo/ui/utils/cn'
import { Column } from '@repo/ui/components/Layout'

type Props = { name: string; isActive: boolean; onClick: VoidFunction }

export const NavBarItem = ({ name, isActive, onClick }: Props) => {
  return (
    <Column
      as={'button'}
      className={'flex-1 items-center gap-1'}
      onClick={onClick}
    >
      <Text
        fontSize={'lg'}
        fontWeight={isActive ? 'semibold' : 'light'}
        className={'text-nowrap'}
      >
        {name}
      </Text>
      <hr
        className={cn('border-main border-1 w-full rounded-full', {
          invisible: !isActive,
        })}
      />
    </Column>
  )
}
