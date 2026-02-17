'use client'

import { useState } from 'react'
import { Column, JustifyBetween } from '@repo/ui/components/Layout'
import { NavBarItem } from './_components/NavBarItem'
import { Participation, Result } from './_components/Pages'

export type StepType = 'participation' | 'result'

const STEP_NAME = {
  participation: '진행중인 이벤트',
  result: '종료된 이벤트',
}
const TABS: StepType[] = ['participation', 'result']

export const LuckyDraw = () => {
  const [currentTab, setCurrentTab] = useState<StepType>('participation')

  return (
    <>
      <Column className={'h-full p-5'}>
        <JustifyBetween as={'nav'} className={'gap-10'}>
          {TABS.map((tab) => (
            <NavBarItem
              key={tab}
              isActive={currentTab === tab}
              name={STEP_NAME[tab]}
              onClick={() => {
                setCurrentTab(tab)
              }}
            />
          ))}
        </JustifyBetween>
        {currentTab === 'participation' && <Participation />}
        {currentTab === 'result' && <Result />}
      </Column>
    </>
  )
}
