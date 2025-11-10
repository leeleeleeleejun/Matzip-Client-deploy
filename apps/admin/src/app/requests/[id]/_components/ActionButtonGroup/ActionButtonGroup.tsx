import { Flex } from '@repo/ui/components/Layout'
import { cn } from '@repo/ui/utils/cn'
import { COLOR_VARIANTS } from '@repo/ui/consts/colorVariant'
import { requestReview } from '@/app/requests/[id]/_api/services/request'

type Props = {
  placeId: string
  onOpen: VoidFunction
}

export const ActionButtonGroup = ({ placeId, onOpen }: Props) => {
  const approved = async () => {
    await requestReview(placeId, {
      status: 'APPROVED',
      rejectedReason: null,
    })
  }

  return (
    <Flex className={'gap-10'}>
      <button
        onClick={onOpen}
        className={cn(
          'w-full',
          'rounded-lg',
          'py-2',
          COLOR_VARIANTS.red.text,
          COLOR_VARIANTS.red.background,
        )}
      >
        거절
      </button>
      <button
        className={cn(
          'w-full',
          'rounded-lg',
          'py-2',
          COLOR_VARIANTS.blue.text,
          COLOR_VARIANTS.blue.background,
        )}
        onClick={approved}
      >
        등록
      </button>
    </Flex>
  )
}
