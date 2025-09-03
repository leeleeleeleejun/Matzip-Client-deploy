import { AnimatePresence, motion } from 'motion/react'
import { Icon } from '@repo/ui/components/Icon'
import { Text } from '@repo/ui/components/Text'
import { Category } from '@/_apis/schemas/category'
import { CLIENT_PATH } from '@/_constants/path'
import { Flex } from '@repo/ui/components/Layout'

export const Result = ({
  selectedCategory,
  isSpinning,
}: {
  selectedCategory: Category | null
  isSpinning: boolean
}) => {
  return (
    <AnimatePresence>
      {selectedCategory && !isSpinning && (
        <motion.a
          href={CLIENT_PATH.CATEGORY_DETAIL(selectedCategory.id)}
          className='rounded-xl bg-white p-6 shadow-lg'
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -30 }}
          transition={{ duration: 0.5 }}
        >
          <div className='text-center'>
            <Icon
              type={selectedCategory.iconKey}
              size={80}
              className='mx-auto mb-4'
            />
            <h3 className='mb-2 text-2xl font-bold text-gray-800'>
              오늘은{' '}
              <span className='text-yellow'>{selectedCategory.name}</span>{' '}
              어때요?
            </h3>
            <Flex className={'gap-2'}>
              <Icon type={'logo'} size={16} />
              <Text
                fontSize={'sm'}
                fontWeight={'medium'}
                className='text-gray-300'
              >
                맛있는 {selectedCategory.name} 맛집 찾으러 가기
              </Text>
            </Flex>
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
