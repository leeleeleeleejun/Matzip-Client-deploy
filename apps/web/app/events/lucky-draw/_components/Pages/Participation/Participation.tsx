'use client'

import { useDisclosure } from '@heroui/react'
import { Column } from '@repo/ui/components/Layout'
import { Button } from '@repo/ui/components/Button'
import { ParticipationModal } from './ParticipationModal'
import { ParticipationCountdown } from './ParticipationCountdown'
import { ParticipationPrize } from './ParticipationPrize'
import { RemainingTickets } from './RemainingTickets'

export const Participation = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Column className={'mt-10 flex-1 items-center gap-10'}>
        <ParticipationCountdown remainingTime={'6일 6시간 30분 24초'} />
        <ParticipationPrize
          description={'BBQ 황금올리브 치킨 기프티콘 1장'}
          totalWinnersCount={1}
          imageUrl={'/images/test.png'}
        />
        <Column className={'mt-auto w-full gap-2.5'}>
          <RemainingTickets remainingTicketsCount={100} />
          <Button size={'medium'} className={'w-full'} onClick={onOpen}>
            응모하기
          </Button>
        </Column>
      </Column>
      <ParticipationModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        remainingTicketsCount={10}
      />
    </>
  )
}
