'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { useSuspenseQuery } from '@tanstack/react-query'
import type { Category } from '@/_apis/schemas/category'
import { useCategoryQueries } from '@/_apis/queries/category'
import { Text } from '@repo/ui/components/Text'
import { Icon } from '@repo/ui/components/Icon'
import { Column, Flex } from '@repo/ui/components/Layout'
import { SlotColumn } from './_components/SlotColumn'
import { ActionButton } from './_components/ActionButton'
import { Result } from './_components/Result'

const FoodSlotMachine = () => {
  const { data: categories } = useSuspenseQuery(useCategoryQueries.list())
  const [isSpinning, setIsSpinning] = useState<boolean>(false)
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  )

  const spinSlots = async (): Promise<void> => {
    if (isSpinning) return

    setIsSpinning(true)
    setSelectedCategory(null)

    // 3초 후 랜덤 카테고리 선택
    setTimeout(() => {
      const randomIndex: number = Math.floor(Math.random() * categories.length)
      setSelectedCategory(categories[randomIndex]!)
      setIsSpinning(false)
    }, 3000)
  }

  return (
    <Column className='items-center gap-8 p-4'>
      {/* 제목 */}
      <motion.div
        className='flex flex-col items-center gap-2'
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Flex className={'gap-3'}>
          <Icon type={'slot'} size={30} />
          <Text as={'h1'} fontSize={'3xl'} fontWeight={'bold'}>
            오늘 뭐 먹지?
          </Text>
          <Icon type={'slot'} size={30} />
        </Flex>
        <Text className={'text-gray-300'}>
          슬롯머신을 돌려서 오늘의 메뉴를 정해보세요!
        </Text>
      </motion.div>
      {/* 슬롯머신 */}
      <div className='border-3 rounded-2xl border-gray-100 p-6 shadow-lg'>
        <div className='flex gap-4'>
          <SlotColumn
            delay={0}
            isSpinning={isSpinning}
            selectedCategory={selectedCategory}
            categories={categories}
          />
          <SlotColumn
            delay={0.1}
            isSpinning={isSpinning}
            selectedCategory={selectedCategory}
            categories={categories}
          />
          <SlotColumn
            delay={0.2}
            isSpinning={isSpinning}
            selectedCategory={selectedCategory}
            categories={categories}
          />
        </div>
      </div>
      {/* 버튼 */}
      <ActionButton isSpinning={isSpinning} spinSlots={spinSlots} />
      {/* 슬롯 결과 */}
      <Result selectedCategory={selectedCategory} isSpinning={isSpinning} />
      {/* 하단 설명 */}
      <motion.div
        className='text-center text-gray-400'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <Text fontSize={'sm'}>
          선택 장애가 있으신가요? 🤔
          <br />
          슬롯머신을 돌려서 운명에 맡겨보세요!
        </Text>
      </motion.div>
    </Column>
  )
}

export default FoodSlotMachine
