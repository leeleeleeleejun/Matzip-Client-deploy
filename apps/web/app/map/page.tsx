import { OnlyLeftHeader } from '@repo/ui/components/Header'
import { BottomNavigation } from '@/_components/BottomNavigation'
import { MapContainer } from './MapContainer'

const Page = () => {
  return (
    <>
      <OnlyLeftHeader icon={'markerWithMap'} name={'주변 맛집'} />
      <MapContainer />
      <BottomNavigation />
    </>
  )
}
export default Page
