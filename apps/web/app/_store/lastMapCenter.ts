import { create } from 'zustand'
import { Coord } from '@/map/_utils/toLatLng'

type LastMapCenter = {
  lastMapCenter: Coord | null
  setLastMapCenter: (mapCenter: Coord) => void
}

/**
 * 지도의 마지막 중심 좌표를 관리하는 스토어
 *
 * @description
 * 사용자가 지도를 보고 있다가 다른 동작을 수행하고 돌아왔을 때,
 * 보고 있던 위치를 유지하기 위해 사용합니다.
 *
 * [주요 사용 시나리오]
 * 1. 맵 페이지(이탈) -> 상세 페이지/프로필 등 다른 페이지 이동 -> 맵 페이지(복귀) 시 위치 복구
 * 2. 메인 화면에서 캠퍼스 변경(천안/공주/예산) 시 이전 캠퍼스의 마지막 위치 저장용
 */
export const useLastMapCenterStore = create<LastMapCenter>((set) => ({
  lastMapCenter: null,
  setLastMapCenter: (mapCenter: Coord) => set({ lastMapCenter: mapCenter }),
}))
