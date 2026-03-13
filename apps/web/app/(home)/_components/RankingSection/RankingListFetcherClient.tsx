'use client'

import dynamic from 'next/dynamic'
import { PlaceListItem } from '@/_components/PlaceListItem'

export const RankingListFetcherClient = dynamic(
  () =>
    import('./RankingListFetcher').then((mod) => ({
      default: mod.RankingListFetcher,
    })),
  {
    ssr: false,
    loading: () => <PlaceListItem.Skeleton />,
  },
)
