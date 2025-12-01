'use client'

import { Skeleton } from '@heroui/react'
import { Column, Flex } from '@repo/ui/components/Layout'
import { cn } from '@repo/ui/utils/cn'

type Props = {
  count?: number
}

export const PlaceListItemSkeleton = ({ count = 3 }: Props) => {
  return (
    <div className={cn('w-full', 'flex flex-col gap-4')}>
      {Array.from({ length: count }).map((_, index) => (
        <Column
          key={index}
          className='border-b-1 w-full gap-3 border-gray-50 pb-4 pt-2.5'
        >
          <Skeleton className='h-4 w-14 rounded-lg' />
          <Skeleton className='w-26 h-4 rounded-lg' />
          <Flex className={'gap-1'}>
            <Skeleton className='h-4 w-14 rounded-lg' />
            <Skeleton className='h-4 w-14 rounded-lg' />
          </Flex>
        </Column>
      ))}
    </div>
  )
}
