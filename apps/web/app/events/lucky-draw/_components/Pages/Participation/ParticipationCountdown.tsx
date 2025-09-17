'use client'

import { useEffect, useState } from 'react'
import { Column } from '@repo/ui/components/Layout'
import { Text } from '@repo/ui/components/Text'
import { formatRemainingTime } from '@/events/lucky-draw/_utils/formatRemainingTime'

export const ParticipationCountdown = ({
  eventEndDate,
}: {
  eventEndDate: string
}) => {
  const [remainingTime, setRemainingTime] = useState('')

  useEffect(() => {
    const target = new Date(eventEndDate).getTime()

    const update = () => {
      const now = Date.now()
      const diff = target - now
      setRemainingTime(formatRemainingTime(diff))
    }

    update()
    const timer = setInterval(update, 1000)

    return () => clearInterval(timer)
  }, [eventEndDate])

  return (
    <Column className={'items-center gap-1'}>
      <Text fontSize={'sm'} fontWeight={'semibold'}>
        응모 종료까지 남은 시간
      </Text>
      <Text fontSize={'2xl'} fontWeight={'semibold'} className={'text-yellow'}>
        {remainingTime}
      </Text>
    </Column>
  )
}
