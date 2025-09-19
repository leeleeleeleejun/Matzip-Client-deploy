'use client'

import { useState } from 'react'
import { Column, JustifyBetween } from '@repo/ui/components/Layout'
import { NavBarItem } from './_components/NavBarItem'
import { Participation, Result } from './_components/Pages'

export type StepType = 'participation' | 'result'

const STEP_NAME = {
  participation: '응모 하기',
  result: '응모 결과',
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
