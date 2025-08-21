'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { usePlaceQueries } from '@/_apis/queries/place'
import { RankingPlaceList } from '@/_components/RankingPlaceList'
import { useCampusStore } from '@/_store/campus'

export const MostViewsPlaces = () => {
  const { campus } = useCampusStore()
  const { data } = useSuspenseQuery(usePlaceQueries.byRanking('views', campus))

  return <RankingPlaceList title={'오늘의 맛집'} icon={'fire'} places={data} />
}
