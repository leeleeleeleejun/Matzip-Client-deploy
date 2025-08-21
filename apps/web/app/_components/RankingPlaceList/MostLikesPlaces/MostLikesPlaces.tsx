'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { usePlaceQueries } from '@/_apis/queries/place'
import { RankingPlaceList } from '@/_components/RankingPlaceList'
import { useCampusStore } from '@/_store/campus'

export const MostLikesPlaces = () => {
  const { campus } = useCampusStore()
  const { data } = useSuspenseQuery(usePlaceQueries.byRanking('likes', campus))

  return (
    <RankingPlaceList title={'찜많은 맛집'} icon={'fireHeart'} places={data} />
  )
}
