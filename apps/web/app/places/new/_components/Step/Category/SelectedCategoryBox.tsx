import type { Category as CategoryType } from '@/_apis/schemas/category'
import { JustifyAround } from '@repo/ui/components/Layout'
import { AnimatePresence, motion } from 'motion/react'
import { SelectedCategoryItem } from '@/places/new/_components/Step/Category/SelectedCategoryItem'

type Props = {
  selectedCategories: CategoryType[]
  removeCategory: (category: CategoryType) => void
}

export const SelectedCategoryBox = ({
  selectedCategories,
  removeCategory,
}: Props) => {
  const MAX_COUNT = 5
  const slots = Array.from({ length: MAX_COUNT }, (_, index) => {
    return selectedCategories[index] || null
  })

  return (
    <JustifyAround>
      {slots.map((category, index) => (
        <div key={`slot-${index}`} className='min-w-16.5 min-h-18.5'>
          <AnimatePresence mode='wait'>
            {category ? (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{
                  opacity: 0,
                  scale: 0.6,
                  y: -10,
                }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                }}
              >
                <SelectedCategoryItem
                  category={category}
                  onClick={() => removeCategory(category)}
                />
              </motion.div>
            ) : (
              <motion.div
                key='empty'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.2,
                  ease: 'easeOut',
                }}
              >
                <EmptyCategoryItem />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </JustifyAround>
  )
}

// 빈 상자 컴포넌트
const EmptyCategoryItem = () => (
  <div className='min-w-16.5 min-h-18.5 rounded-md bg-gray-50'></div>
)
