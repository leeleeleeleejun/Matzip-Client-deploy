'use client'

import Link from 'next/link'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useEventQueries } from '@/_apis/queries/event'
import { EmptyEventState } from '../EmptyEventState'
import { EventTitle } from '@/events/lucky-draw/_components/EventTitle'
import { EventPrizeCard } from '@/events/lucky-draw/_components/EventPrizeCard'
import { Column, VerticalScrollArea } from '@repo/ui/components/Layout'
import { Button } from '@repo/ui/components/Button'
import { CLIENT_PATH } from '@/_constants/path'
import { Text } from '@repo/ui/components/Text'

export const GuestView = () => {
  const { data } = useSuspenseQuery(useEventQueries.byPublic())

  if (!data) {
    return (
      <Column className={'flex-1 p-5'}>
        <EmptyEventState />
        <div className='rounded-lg bg-gray-50 p-3 text-center'>
          <Text
            fontSize={'sm'}
            fontWeight={'semibold'}
            className={'text-gray-500'}
          >
            잠깐! 로그인이 되어있지 않으시네요 👀
            <br />
            <Link
              className='text-blue-500 underline underline-offset-2'
              href={CLIENT_PATH.LOGIN}
            >
              로그인
            </Link>
            해야 참여했던 이벤트를 확인할 수 있어요!
          </Text>
        </div>
      </Column>
    )
  }

  const { prize, totalWinnersCount, participantsCount } = data

  return (
    <VerticalScrollArea className={'h-full min-h-0 justify-between gap-10 p-5'}>
      <EventTitle />
      <Column className={'gap-3'}>
        <EventPrizeCard
          {...prize}
          totalWinnersCount={totalWinnersCount}
          participantsCount={participantsCount}
        />
      </Column>
      <Button
        as={Link}
        href={CLIENT_PATH.LOGIN}
        size={'medium'}
        fullWidth={true}
      >
        참여하기
      </Button>
    </VerticalScrollArea>
  )
}
