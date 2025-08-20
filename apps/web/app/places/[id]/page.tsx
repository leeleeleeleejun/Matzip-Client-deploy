import { usePlaceQueries } from '@/_apis/queries/place'
import { HydrationBoundaryPage } from '@/HydrationBoundaryPage'
import { PlaceDetailPage } from './PlaceDetailPage'

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params

  return (
    <HydrationBoundaryPage
      prefetch={async (queryClient) => {
        await queryClient.prefetchQuery(usePlaceQueries.detail(id))
      }}
    >
      <PlaceDetailPage id={id} />
    </HydrationBoundaryPage>
  )
}

export default Page
