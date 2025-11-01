'use client'

import dynamic from 'next/dynamic'

const MapComponent = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => <div>지도 로딩 중...</div>,
})

export const MapContainer = () => <MapComponent />
