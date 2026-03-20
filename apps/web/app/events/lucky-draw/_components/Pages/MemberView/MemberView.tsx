'use client'

import { Suspense, useState } from 'react'
import { Spinner } from '@heroui/react'
import { JustifyBetween, VerticalScrollArea } from '@repo/ui/components/Layout'
import { NavBarItem } from './NavBarItem'
import { InProgressEvent } from './InProgressEvent'
import { FinishedEvent } from './FinishedEvent'

export type StepType = 'inProgress' | 'finished'

const STEP_NAME = {
  inProgress: '진행중인 이벤트',
  finished: '종료된 이벤트',
}
const TABS: StepType[] = ['inProgress', 'finished']

export const MemberView = () => {
  const [currentTab, setCurrentTab] = useState<StepType>('inProgress')

  return (
    <VerticalScrollArea className={'h-full min-h-0 p-5'}>
      <Tabs value={currentTab} onSelect={setCurrentTab} />
      <Suspense fallback={<Spinner className={'m-auto'} />}>
        {currentTab === 'inProgress' ? <InProgressEvent /> : <FinishedEvent />}
      </Suspense>
    </VerticalScrollArea>
  )
}

type TabsProps = {
  value: StepType
  onSelect: (tab: StepType) => void
}

const Tabs = ({ value = 'inProgress', onSelect }: TabsProps) => {
  return (
    <JustifyBetween as={'nav'} className={'gap-10'}>
      {TABS.map((tab) => (
        <NavBarItem
          key={tab}
          isActive={value === tab}
          name={STEP_NAME[tab]}
          onClick={() => {
            onSelect(tab)
          }}
        />
      ))}
    </JustifyBetween>
  )
}
