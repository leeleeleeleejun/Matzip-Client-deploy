'use client'

import { motion } from 'motion/react'
import { Icon } from '@repo/ui/components/Icon'
import { cn } from '@repo/ui/utils/cn'
import { BOTTOM_OFFSET } from '@/map/constants/CurrentLocationButton'

type Props = {
  onClick: VoidFunction
  isCenteredOnUser: boolean
  bottomOffset?: number
}

export const CurrentLocationButton = ({
  onClick,
  isCenteredOnUser,
  bottomOffset,
}: Props) => {
  return (
    <motion.button
      initial={{ bottom: BOTTOM_OFFSET.WITH_BOTTOM_SHEET }}
      animate={{ bottom: bottomOffset ?? BOTTOM_OFFSET.WITH_BOTTOM_SHEET }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
      }}
      onClick={onClick}
      aria-label='내 위치로 이동'
      className={cn(
        'flex items-center justify-center rounded-full bg-white p-1.5 shadow-md',
        'z-1 absolute right-4',
      )}
    >
      <Icon
        type='crosshairs'
        color={isCenteredOnUser ? '--color-blue' : '--color-gray-200'}
      />
    </motion.button>
  )
}
