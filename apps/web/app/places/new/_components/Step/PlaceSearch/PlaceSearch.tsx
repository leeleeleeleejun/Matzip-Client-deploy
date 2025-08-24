import { SearchPage } from '@/_components/SearchPage'
import { useSearchPlaceByKakao } from '@/_hooks/useSearchPlaceByKakao'

export const PlaceSearch = () => {
  const { searchListsData, searchFunc } = useSearchPlaceByKakao()

  const places = searchListsData.map((item) => ({
    id: item.id,
    name: item.place_name,
    address: item.address_name,
  }))

  return (
    <SearchPage
      places={places}
      searchFunc={searchFunc}
      onSelectPlace={(id) => {
        console.log(id)
      }}
    />
  )
}
