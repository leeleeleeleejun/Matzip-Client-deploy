'use client'

import 'react-spring-bottom-sheet/dist/style.css'
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet'
import { useRef } from 'react'

export const PlaceList = () => {
  const sheetRef = useRef<BottomSheetRef | null>(null)

  return (
    <BottomSheet
      className={'z-20'}
      open
      blocking={false}
      ref={sheetRef}
      defaultSnap={({ maxHeight }) => Math.floor(maxHeight * 0.2)}
      snapPoints={({ maxHeight }) => [
        Math.floor(maxHeight * 0.8),
        Math.floor(maxHeight * 0.2),
      ]}
      expandOnContentDrag
    >
      <div>하이</div>
    </BottomSheet>
  )
}
