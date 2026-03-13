'use client'

import type { RankingPlaceSort } from '@/_apis/schemas/place'
import { useCampusStore } from '@/_store/campus'
import { useSuspenseQuery } from '@tanstack/react-query'
import { usePlaceQueries } from '@/_apis/queries/place'
import { EmptyFallback } from '@/_components/EmptyFallback'
import { PlaceListItem } from '@/_components/PlaceListItem'

export const RankingListFetcher = ({
  rankingPlaceSort,
}: {
  rankingPlaceSort: RankingPlaceSort
}) => {
  const { campus } = useCampusStore()
  const { data: places } = useSuspenseQuery(
    usePlaceQueries.byRanking(rankingPlaceSort, campus),
  )

  return (
    <EmptyFallback
      isEmpty={places.length === 0}
      fallbackDescription={'아직 집계된 추천 맛집이 없습니다'}
    >
      <ul className={'px-3'}>
        {places.map((place, index) => (
          <PlaceListItem
            key={place.placeId}
            {...place}
            showBorder={index !== places.length - 1}
          />
        ))}
      </ul>
    </EmptyFallback>
  )
}
