import { LuckyDraw } from './LuckyDraw'
import { HydrationBoundaryPage } from '@/_components/HydrationBoundaryPage'
import { useEventQueries } from '@/_apis/queries/event'

export const dynamic = 'force-dynamic'

const Page = () => {
  return (
    <HydrationBoundaryPage
      prefetch={async (queryClient) => {
        await queryClient.prefetchQuery(useEventQueries.privateInfo())
      }}
    >
      <LuckyDraw />
    </HydrationBoundaryPage>
  )
}

export default Page
