import { useState } from 'react'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@heroui/react'
import { cn } from '@repo/ui/utils/cn'
import { Textarea } from '@repo/ui/components/Textarea'
import { COLOR_VARIANTS } from '@repo/ui/consts/colorVariant'
import { requestReview } from '@/app/requests/[id]/_api/services/request'

type Props = {
  isOpen: boolean
  onOpenChange: VoidFunction
  placeId: string
}

export const RejectModal = ({ isOpen, onOpenChange, placeId }: Props) => {
  const [value, setValue] = useState('')
  const rejected = async (rejectedReason: string) => {
    await requestReview(placeId, { status: 'REJECTED', rejectedReason })
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement={'center'}>
      <ModalContent>
        <ModalHeader className={'text-center'}>등록 거절 사유</ModalHeader>
        <ModalBody>
          <Textarea value={value} setValue={setValue} />
        </ModalBody>
        <ModalFooter>
          <button
            onClick={() => {
              rejected(value)
            }}
            className={cn(
              'w-full',
              'rounded-lg',
              'py-2',
              COLOR_VARIANTS.red.text,
              COLOR_VARIANTS.red.background,
            )}
          >
            사유 등록하기
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
