import { Suspense } from 'react'
import { ErrorBoundary } from '@suspensive/react'
import { Icon, IconType } from '@repo/ui/components/Icon'
import type { RankingPlaceSort } from '@/_apis/schemas/place'
import { Column, Flex } from '@repo/ui/components/Layout'
import { PlaceListItem } from '@/_components/PlaceListItem'
import { Text } from '@repo/ui/components/Text'
import { RankingListFetcherClient } from './RankingListFetcherClient'

type Props = {
  title: string
  icon: IconType
  rankingPlaceSort: RankingPlaceSort
}

export const RankingSection = ({ title, icon, rankingPlaceSort }: Props) => {
  return (
    <Column className={'gap-1.5 px-5'}>
      <Flex className={'gap-1'}>
        <Icon type={icon} size={30} />
        <Text as={'h2'} variant={'title1'}>
          {title}
        </Text>
      </Flex>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <Suspense fallback={<PlaceListItem.Skeleton />}>
          <RankingListFetcherClient rankingPlaceSort={rankingPlaceSort} />
        </Suspense>
      </ErrorBoundary>
    </Column>
  )
}

const ErrorFallback = () => (
  <Text variant='title3' className='my-4 text-center text-gray-300'>
    맛집 정보를 불러오는 중에 오류가 발생했습니다.
  </Text>
)
