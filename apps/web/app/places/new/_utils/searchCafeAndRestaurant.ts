import { getSearchPlaceByKakao } from '@/_apis/services/kakaoSearch'

export const searchCafeAndRestaurant = async (params: {
  query: string
  location: { x: number; y: number }
}) => {
  const [cafes, restaurants] = await Promise.all([
    getSearchPlaceByKakao({ ...params, categoryCode: 'cafe' }),
    getSearchPlaceByKakao({ ...params, categoryCode: 'restaurant' }),
  ])

  // 두 결과를 합쳐서 반환
  return [...cafes, ...restaurants]
}
