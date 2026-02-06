import { useCallback } from 'react'
import { SearchPage } from '@/_components/SearchPage'
import { useFormContext } from 'react-hook-form'
import type { NewPlaceRequest } from '@/_apis/schemas/place'
import { CAMPUS_LOCATION } from '@/_constants/campus'
import { searchCafeAndRestaurant } from '@/places/new/_utils/searchCafeAndRestaurant'

type Props = {
  nextStep: VoidFunction
}

export const PlaceSearch = ({ nextStep }: Props) => {
  const { getValues, setValue } = useFormContext<NewPlaceRequest>()
  const campus = getValues().campus

  const handleSearch = useCallback(
    async (query: string) => {
      const { longitude: x, latitude: y } = CAMPUS_LOCATION[campus]
      const result = await searchCafeAndRestaurant({
        query,
        location: { x, y },
      })
      return result.map((item) => ({
        id: item.id,
        name: item.place_name,
        address: item.address_name,
      }))
    },
    [campus],
  )

  return (
    <SearchPage
      searchFunc={handleSearch}
      onSelectPlace={(id: string) => {
        setValue('kakaoPlaceId', id)
        nextStep()
      }}
    />
  )
}
