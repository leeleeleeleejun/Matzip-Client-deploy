import { RequestDetailPage } from './RequestDetailPage'
import { HydrationBoundaryPage } from '@/HydrationBoundaryPage'
import { useRequestQueries } from '@/_apis/queries/request'

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params

  return (
    <HydrationBoundaryPage
      prefetch={async (queryClient) => {
        await queryClient.prefetchQuery(useRequestQueries.detail(id))
      }}
    >
      <RequestDetailPage id={id} />
    </HydrationBoundaryPage>
  )
}

export default Page
