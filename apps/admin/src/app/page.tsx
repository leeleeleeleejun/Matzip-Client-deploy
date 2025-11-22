import { VerticalScrollArea } from '@repo/ui/components/Layout'
import { RequestsByCampus } from './_components/RequestsByCampus'
import { OnlyLeftHeader } from '@repo/ui/components/Header'
import { getRequests } from '@/app/_api/services/request'
import type { Request } from '@/app/_api/types'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const data = (await getRequests()) || []
  const singwan: Request[] = []
  const cheonan: Request[] = []
  const yesan: Request[] = []

  for (const request of data) {
    switch (request.campus) {
      case 'SINGWAN':
        singwan.push(request)
        break
      case 'CHEONAN':
        cheonan.push(request)
        break
      case 'YESAN':
        yesan.push(request)
        break
    }
  }

  return (
    <>
      <OnlyLeftHeader icon={'logo'} name={'대기중'} />
      <VerticalScrollArea className={'gap-10 p-5'}>
        <RequestsByCampus campus={'SINGWAN'} requestList={singwan} />
        <RequestsByCampus campus={'CHEONAN'} requestList={cheonan} />
        <RequestsByCampus campus={'YESAN'} requestList={yesan} />
      </VerticalScrollArea>
    </>
  )
}
