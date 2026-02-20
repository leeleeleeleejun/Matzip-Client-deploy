import type { Category as CategoryType } from '@/_apis/schemas/category'
import { cn } from '@repo/ui/utils/cn'
import { CategoryItem } from '@/places/new/_components/Step/Category/CategoryItem'

type Props = {
  categories: CategoryType[]
  addCategory: (category: CategoryType) => void
  removeCategory: (category: CategoryType) => void
  includeInCategories: (category: CategoryType) => boolean
}

export const CategoryBox = ({
  categories,
  addCategory,
  removeCategory,
  includeInCategories,
}: Props) => {
  const onToggle = (category: CategoryType) => {
    if (includeInCategories(category)) {
      removeCategory(category)
    } else {
      addCategory(category)
    }
  }

  return (
    <div className={cn('grid grid-flow-row grid-cols-5 gap-y-6', 'py-2.5')}>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
          onClick={() => onToggle(category)}
          includeInCategories={includeInCategories(category)}
        />
      ))}
    </div>
  )
}
