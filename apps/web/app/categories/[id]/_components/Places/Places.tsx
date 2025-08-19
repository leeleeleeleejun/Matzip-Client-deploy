import { useSuspenseQuery } from '@tanstack/react-query'
import { usePlaceQueries } from '@/_apis/queries/place'
import { PlaceListItem } from '@/_components/PlaceListItem'
import { VerticalScrollArea } from '@repo/ui/components/Layout'

export const Places = ({ id }: { id: string }) => {
  const { data: places } = useSuspenseQuery(usePlaceQueries.byCategory(id))

  return (
    <VerticalScrollArea as={'ul'} className={'px-8'}>
      {places.map((place, index) => (
        <PlaceListItem
          key={place.placeId}
          {...place}
          showBorder={index !== places.length - 1}
        />
      ))}
    </VerticalScrollArea>
  )
}
