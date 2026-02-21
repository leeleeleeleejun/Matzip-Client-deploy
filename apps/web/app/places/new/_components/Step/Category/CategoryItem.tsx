import type { Category } from '@/_apis/schemas/category'
import { Icon } from '@repo/ui/components/Icon'
import { Text } from '@repo/ui/components/Text'
import { Column } from '@repo/ui/components/Layout'
import { cn } from '@repo/ui/utils/cn'

type Props = {
  category: Category
  onClick: VoidFunction
  includeInCategories: boolean
}

export const CategoryItem = ({
  category,
  onClick,
  includeInCategories,
}: Props) => {
  const { name, iconKey } = category
  return (
    <Column
      as={'button'}
      type={'button'}
      className={cn('items-center gap-1', {
        'opacity-40': includeInCategories,
      })}
      onClick={onClick}
    >
      <Icon type={iconKey} size={40} />
      <Text
        as={'span'}
        fontSize={'sm'}
        fontWeight={'semibold'}
        className={'text-main text-nowrap'}
      >
        {name}
      </Text>
    </Column>
  )
}
