import { queryOptions } from '@tanstack/react-query'
import { RankingPlaceSort } from '@/_apis/schemas/place'
import {
  getPlaceDetail,
  getPlacesByCategory,
  getPlacesByRanking,
} from '@/_apis/services/place'
import type { CampusType } from '@/_constants/campus'

export const PlaceQueryKeys = {
  all: () => ['place'] as const,
  detail: (id: string) => [...PlaceQueryKeys.all(), 'detail', id] as const,
  byRanking: (sort: RankingPlaceSort, campus: CampusType) =>
    [...PlaceQueryKeys.all(), 'ranking', sort, campus] as const,
  byCategory: (id: string, campus: CampusType) =>
    [...PlaceQueryKeys.all(), 'category', id, campus] as const,
}

export const usePlaceQueries = {
  byRanking: (sort: RankingPlaceSort, campus: CampusType) =>
    queryOptions({
      queryKey: PlaceQueryKeys.byRanking(sort, campus),
      queryFn: () => getPlacesByRanking(sort, campus),
    }),

  byCategory: (id: string, campus: CampusType) =>
    queryOptions({
      queryKey: PlaceQueryKeys.byCategory(id, campus),
      queryFn: () => getPlacesByCategory(id, campus),
    }),

  detail: (id: string) =>
    queryOptions({
      queryKey: PlaceQueryKeys.detail(id),
      queryFn: () => getPlaceDetail(id),
    }),
}
