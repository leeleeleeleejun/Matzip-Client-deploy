'use client'

import { useState } from 'react'
import { useDisclosure } from '@heroui/react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useEventQueries } from '@/_apis/queries/event'
import { Text } from '@repo/ui/components/Text'
import { Button } from '@repo/ui/components/Button'
import { Column } from '@repo/ui/components/Layout'
import { LottoBalls } from '../../LottoBalls'
import { ParticipationStatus } from '../../ParticipationStatus'
import { ResultModal } from './ResultModal'

export const Result = () => {
  const [isRunning, setIsRunning] = useState(false)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const { data } = useSuspenseQuery(useEventQueries.result())

  // Todo: 이전 이벤트 없을 경우 화면 구현
  if (!data) return null

  const { isWinner, participantsCount, usedTicketsCount } = data

  const stopRunning = () => {
    setIsRunning(false)
  }

  const onClick = () => {
    setIsRunning(true)
    setTimeout(() => {
      onOpen()
    }, 500)
  }

  return (
    <>
      <Column className='h-full items-center gap-10'>
        <Column className='mt-10 items-center gap-4'>
          <Text className='text-center' variant='title1'>
            행운의 주인공이 되어보세요!
          </Text>
          <LottoBalls isRunning={isRunning} />
          <ParticipationStatus
            mode={'past'}
            participantsCount={participantsCount}
            usedTicketsCount={usedTicketsCount}
          />
        </Column>
        <Button className='mt-auto w-full' size='medium' onClick={onClick}>
          확인하기
        </Button>
      </Column>
      <ResultModal
        isWinner={isWinner}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        stopRunning={stopRunning}
      />
    </>
  )
}
