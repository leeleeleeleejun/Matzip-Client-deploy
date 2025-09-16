import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  NumberInput,
} from '@heroui/react'

type Props = {
  isOpen: boolean
  onOpenChange: VoidFunction
  remainingTicketsCount: number
}

export const ParticipationModal = ({
  isOpen,
  onOpenChange,
  remainingTicketsCount,
}: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement='center'
      size='sm'
      classNames={{
        body: 'gap-0',
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>몇 장의 응모권을 사용하시겠습니까?</ModalHeader>
            <ModalBody>
              <NumberInput
                defaultValue={remainingTicketsCount}
                minValue={1}
                maxValue={remainingTicketsCount}
                label={'응모권 개수'}
                placeholder={'사용할 응모권 개수를 입력하세요'}
                radius={'lg'}
              />
            </ModalBody>
            <ModalFooter>
              <Button color={'primary'}>응모하기</Button>
              <Button color={'danger'} variant={'light'} onPress={onClose}>
                취소
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
