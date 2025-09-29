'use client'

import Image from 'next/image'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useRequestQueries } from '@/_apis/queries/request'
import { Header } from '@repo/ui/components/Header'
import { HeaderBackButton } from '@/_components/HeaderBackButton'
import { Text } from '@repo/ui/components/Text'
import { StatusChip } from '@/requests/_components/StatusChip'
import { Column, VerticalScrollArea } from '@repo/ui/components/Layout'
import { Banner } from '@/_components/Banner'
import {
  Description,
  Location,
  Menus,
  SubTitle,
} from '@/places/[id]/_components'

export const RequestDetailPage = ({ id }: { id: string }) => {
  const { data } = useSuspenseQuery(useRequestQueries.detail(id))
  const {
    placeName,
    photos,
    menus,
    description,
    location,
    registerStatus,
    rejectedReason,
  } = data

  return (
    <>
      <Header
        left={<HeaderBackButton />}
        center={
          <Text variant={'heading2'} className={'ml-10'}>
            {placeName}
          </Text>
        }
        right={<StatusChip registerStatus={registerStatus} />}
      />
      <VerticalScrollArea className={'flex-1'}>
        {rejectedReason && registerStatus === 'REJECTED' && (
          <Column className={'px-5 py-3'}>
            <SubTitle icon={'x'} title={'등록 거절 사유'} />
            <Text variant={'body2'} className={'whitespace-pre-wrap'}>
              {description}
            </Text>
          </Column>
        )}
        <Banner
          contents={photos.map((photo) => (
            <Image
              key={photo.displayOrder}
              src={photo.photoUrl}
              alt='place-photo'
              width={450}
              height={180}
              className={'max-h-[180px] object-contain'}
            />
          ))}
          minHeight={180}
          showIndicator={true}
        />
        <Column className={'flex-1 justify-around gap-4 p-5'}>
          <Location location={location} />
          <Menus menus={menus} />
          <Description description={description} />
        </Column>
      </VerticalScrollArea>
    </>
  )
}
