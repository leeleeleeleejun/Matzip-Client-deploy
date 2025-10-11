'use client'

import { Header } from '@repo/ui/components/Header'
import { Icon } from '@repo/ui/components/Icon'
import { Text } from '@repo/ui/components/Text'
import { Column, VerticalScrollArea } from '@repo/ui/components/Layout'
import { Banner } from '@repo/ui/components/Banner'

import { Location } from './_components/Location/Location'
import { Menus } from './_components/Menus/Menus'
import { Description } from './_components/Description'
import { ActionButtonGroup } from './_components/ActionButtonGroup'
import { useDisclosure } from '@heroui/react'
import { RejectModal } from '@/app/request/[id]/_components/RejectModal'
import { useRouter } from 'next/navigation'

export const RequestDetailPage = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const { back } = useRouter()

  return (
    <>
      <Header
        left={
          <button onClick={back}>
            <Icon type={'arrowLeft'} />
          </button>
        }
        center={<Text variant={'heading2'}>우돈탄 다산본점</Text>}
      />
      <VerticalScrollArea className={'flex-1 py-5'}>
        <Banner contents={[]} />
        <Column className={'flex-1 justify-around gap-4 px-5'}>
          <Location />
          <Menus
            menus={[
              {
                name: '짬뽕',
                price: 20000,
                isRecommended: false,
              },
              {
                name: '짬뽕',
                price: 20000,
                isRecommended: false,
              },
              {
                name: '짬뽕',
                price: 20000,
                isRecommended: false,
              },
              {
                name: '짬뽕',
                price: 20000,
                isRecommended: false,
              },
              {
                name: '짬뽕',
                price: 20000,
                isRecommended: false,
              },
              {
                name: '짬뽕',
                price: 20000,
                isRecommended: false,
              },
            ]}
          />
          <Description
            description={
              '직원이 엄청 친절해요! 👍🏻\n' +
              '근데 화장실에 좁고 냄새나요 ㅠㅠ\n' +
              '그래도 짬뽕 양도 많고 불맛 나서 괜춘'
            }
          />
          <ActionButtonGroup onOpen={onOpen} />
        </Column>
      </VerticalScrollArea>
      <RejectModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  )
}
