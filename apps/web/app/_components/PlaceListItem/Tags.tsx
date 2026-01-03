'use client'

import { useState, useRef, useLayoutEffect, useCallback } from 'react'
import { cn } from '@repo/ui/utils/cn'
import { Chip } from '@repo/ui/components/Chip'
import { Text } from '@repo/ui/components/Text'
import { Flex } from '@repo/ui/components/Layout'
import type { BasePlace } from '@/_apis/schemas/place'

type Props = {
  tags: BasePlace['tags']
}

export const Tags = ({ tags }: Props) => {
  const [visibleCount, setVisibleCount] = useState(tags.length)
  const containerRef = useRef<HTMLDivElement>(null)
  const measureRef = useRef<HTMLDivElement>(null)

  const calculateVisibleTags = useCallback(() => {
    if (!containerRef.current || !measureRef.current) return

    const containerWidth = containerRef.current.clientWidth
    const tagNodes = Array.from(measureRef.current.children) as HTMLElement[]
    const GAP = 4 // gap-1 (4px)
    const BADGE_WIDTH = 34 // +N 배지의 대략적인 너비 + 여유분

    let currentWidth = 0
    let count = 0

    for (let i = 0; i < tagNodes.length; i++) {
      const tagWidth = tagNodes[i]?.offsetWidth ?? 0
      const isLastItem = i === tagNodes.length - 1
      const spaceNeeded = tagWidth + (isLastItem ? 0 : GAP + BADGE_WIDTH)

      if (currentWidth + spaceNeeded > containerWidth) {
        break
      }

      currentWidth += tagWidth + GAP
      count++
    }

    setVisibleCount(Math.max(0, Math.min(count, tags.length)))
  }, [tags.length])

  // 초기 렌더링 시 계산 (깜빡임 방지)
  useLayoutEffect(() => {
    calculateVisibleTags()
  }, [calculateVisibleTags])

  const visibleTags = tags.slice(0, visibleCount)
  const remainingTagsCount = tags.length - visibleCount

  return (
    <>
      <Flex ref={containerRef} className={cn('gap-1 overflow-hidden')}>
        {visibleTags.map((tag) => (
          <Chip key={tag.id} icon={tag.iconKey} label={tag.name} />
        ))}

        {remainingTagsCount > 0 && (
          <Text
            variant={'caption1'}
            className={cn(
              'px-2 py-1.5',
              'text-nowrap text-gray-300',
              'rounded-full bg-gray-50',
            )}
          >
            +{remainingTagsCount}
          </Text>
        )}
      </Flex>

      {/*2. 측정용 보이지 않는 영역 (모든 태그를 렌더링해서 너비 측정) */}
      <Flex
        ref={measureRef}
        className='h-0 gap-1 overflow-x-hidden opacity-0'
        aria-hidden
      >
        {tags.map((tag) => (
          <Chip key={tag.id} icon={tag.iconKey} label={tag.name} />
        ))}
      </Flex>
    </>
  )
}
