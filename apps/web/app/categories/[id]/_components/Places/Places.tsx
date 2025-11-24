import { useSuspenseQuery } from '@tanstack/react-query'
import { motion, PanInfo } from 'motion/react' // motion/react 사용
import { useCampusStore } from '@/_store/campus'
import { usePlaceQueries } from '@/_apis/queries/place'
import { PlaceListItem } from '@/_components/PlaceListItem'
import { VerticalScrollArea } from '@repo/ui/components/Layout'
import { EmptyPlaces } from './EmptyPlaces'

type Props = {
  id: string
  setIdFunc: (id: string) => void
}

// 스와이프 감도
const SWIPE_CONFIDENCE_THRESHOLD = 50

export const Places = ({ id, setIdFunc }: Props) => {
  const { campus } = useCampusStore()
  const { data: places } = useSuspenseQuery(
    usePlaceQueries.byCategory(id, campus),
  )

  /**
   * 스와이프 종료 시 호출되는 핸들러
   * - 왼쪽으로 스와이프 (Next): ID 증가
   * - 오른쪽으로 스와이프 (Prev): ID 감소
   */
  const onDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    { offset, velocity }: PanInfo,
  ) => {
    const currentCategoryId = Number(id)
    const swipePower = Math.abs(offset.x) * velocity.x

    // 왼쪽으로 스와이프 (다음 페이지)
    if (swipePower < -SWIPE_CONFIDENCE_THRESHOLD) {
      if (currentCategoryId < 15) {
        setIdFunc(String(currentCategoryId + 1))
      }
    }
    // 오른쪽으로 스와이프 (이전 페이지)
    else if (swipePower > SWIPE_CONFIDENCE_THRESHOLD) {
      if (currentCategoryId > 1) {
        setIdFunc(String(currentCategoryId - 1))
      }
    }
  }

  const content =
    places.length === 0 ? (
      <EmptyPlaces />
    ) : (
      <VerticalScrollArea as={'ul'} className={'px-8'}>
        {places.map((place, index) => (
          <PlaceListItem
            key={place.placeId}
            {...place}
            showCategory={false}
            showBorder={index !== places.length - 1}
          />
        ))}
      </VerticalScrollArea>
    )

  return (
    <div className='relative h-full w-full overflow-hidden'>
      <motion.div
        key={id}
        drag='x'
        onDragEnd={onDragEnd}
        className='relative h-full w-full bg-white'
      >
        {content}
      </motion.div>
    </div>
  )
}
