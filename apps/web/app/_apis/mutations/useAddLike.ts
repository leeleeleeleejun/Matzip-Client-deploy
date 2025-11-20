import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addLike } from '@/_apis/services/like'
import { PlaceQueryKeys } from '@/_apis/queries/place'

export const useAddLike = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: string) => await addLike(id),
    onSuccess: async (response) => {
      const { placeId } = response

      if (!placeId) return

      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: [...PlaceQueryKeys.byLike()],
        }),
        queryClient.invalidateQueries({
          queryKey: [...PlaceQueryKeys.detail(String(placeId))],
        }),
      ])
    },
    // 공통 에러 처리 필요
    onError: (error) => console.error(error),
  })
}
