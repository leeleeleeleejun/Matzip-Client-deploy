'use client'

import { useState } from 'react'
import { Container, NaverMap } from 'react-naver-maps'
import { CAMPUS_LOCATION } from '@/_constants/campus'
import { cn } from '@repo/ui/utils/cn'
import { toLatLng } from '@/map/_utils/toLatLng'
import { useCenterMapToCurrentLocation } from '@/map/_hooks/useCenterMapToCurrentLocation'
import { PlaceList } from '@/map/_components/PlaceList'
import { CurrentLocationButton } from '@/map/_components/CurrentLocationButton'
import { useCampusStore } from '@/_store/campus'

export const MapPage = () => {
  const { campus } = useCampusStore()
  const [map, setMap] = useState<naver.maps.Map | null>(null)
  const [isCenteredOnUser, setIsCenteredOnUser] = useState(false)
  const CenterMapToCurrentLocation = useCenterMapToCurrentLocation(map)

  const centerMapToUserLocation = () => {
    CenterMapToCurrentLocation()
    setIsCenteredOnUser(true)
  }

  const onCenterChanged = () => {
    setIsCenteredOnUser(false)
  }

  return (
    <>
      <CurrentLocationButton
        onClick={centerMapToUserLocation}
        isCenteredOnUser={isCenteredOnUser}
      />
      <Container
        className={cn('map-wrapper', 'w-full', 'h-full')}
        onTouchEnd={onCenterChanged}
      >
        <NaverMap ref={setMap} center={toLatLng(CAMPUS_LOCATION[campus])} />
      </Container>
      <PlaceList />
    </>
  )
}
