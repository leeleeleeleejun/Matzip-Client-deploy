'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Icon } from '@repo/ui/components/Icon'
import { useAddLike } from '@/_apis/mutations/useAddLike'
import { useRemoveLike } from '@/_apis/mutations/useRemoveLike'

type Props = {
  placeId: string
  initIsLiked: boolean
}

export const LikeButton = ({ placeId, initIsLiked }: Props) => {
  const [isLiked, setIsLiked] = useState(initIsLiked)
  const [isAnimating, setIsAnimating] = useState(false)
  const { mutate: addLike, isPending: isAdding } = useAddLike()
  const { mutate: removeLike, isPending: isRemoving } = useRemoveLike()

  const isPending = isAdding || isRemoving

  const onClick = () => {
    if (isPending) return

    // 현재 상태 저장 (에러 시 롤백용)
    const prevIsLiked = isLiked
    // 낙관적 업데이트 (UI 먼저 변경)
    const nextIsLiked = !prevIsLiked
    setIsLiked(nextIsLiked)

    const toggleLikeMutate = nextIsLiked ? addLike : removeLike

    // 애니메이션 트리거
    if (nextIsLiked) {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 200)
    }

    toggleLikeMutate(placeId, {
      onError: () => setIsLiked(prevIsLiked), // 실패 시 롤백
    })
  }

  useEffect(() => {
    setIsLiked(initIsLiked)
  }, [initIsLiked])

  return (
    <motion.button
      onClick={onClick}
      animate={{ scale: isAnimating ? 1.3 : 1 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className='relative flex items-center justify-center p-2'
    >
      <Icon
        type='headerHeart'
        size={26}
        color={isLiked ? '--color-red' : '--color-gray-100'}
      />

      {/* 작은 하트 파티클 */}
      {isLiked &&
        [0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className='absolute'
            initial={{ scale: 0, opacity: 1, y: 0, x: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [1, 1, 0],
              y: -30 - i * 5,
              x: (Math.random() - 0.5) * 20,
            }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
          >
            <Icon type='headerHeart' size={12} color='--color-red' />
          </motion.div>
        ))}
    </motion.button>
  )
}
