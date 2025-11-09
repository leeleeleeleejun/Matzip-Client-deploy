import { useMutation } from '@tanstack/react-query'
import type { NewPlaceRequest } from '@/_apis/schemas/place'
import { createNewPlace } from '@/_apis/services/place'

export const useCreateNewPlace = () => {
  return useMutation({
    mutationFn: async (placeData: NewPlaceRequest) =>
      await createNewPlace(placeData),
    onSuccess: () => {
      //Todo: success, fail을 step이 아닌 페이지로 관리 (replace)
      //Todo: 성공 시 success 페이지로 이동
    },
    onError: (error) => console.error(error),
  })
}
