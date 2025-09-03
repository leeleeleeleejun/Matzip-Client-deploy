import { motion } from 'motion/react'
import { Spinner } from '@heroui/react'
import { Icon } from '@repo/ui/components/Icon'

export const ActionButton = ({
  isSpinning,
  spinSlots,
}: {
  isSpinning: boolean
  spinSlots: () => Promise<void>
}) => {
  const buttonClasses: string = `
    bg-main px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2
    ${isSpinning ? 'text-gray-300' : 'text-white'}
  `

  return (
    <motion.button
      onClick={spinSlots}
      disabled={isSpinning}
      className={buttonClasses}
      whileTap={!isSpinning ? { scale: 0.95 } : {}}
    >
      {isSpinning ? (
        <>
          <Spinner size={'sm'} color={'current'} />
          <p>돌리는 중...</p>
        </>
      ) : (
        <>
          <Icon type={'target'} />
          <span>슬롯머신 돌리기</span>
        </>
      )}
    </motion.button>
  )
}
