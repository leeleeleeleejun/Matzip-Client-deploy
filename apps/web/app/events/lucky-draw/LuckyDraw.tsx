'use client'

import { Column, JustifyBetween } from '@repo/ui/components/Layout'
import { useFunnel } from '@/_hooks/useFunnel'
import { NavBarItem } from './_components/NavBarItem'
import { Status } from './_components/Pages'

export type StepType = 'status' | 'entry' | 'result'
const STEP_ORDER: Record<StepType, string> = {
  status: 'status',
  entry: 'entry',
  result: 'result',
}
const STEP_NAME = {
  status: '응모권 현황',
  entry: '응모 하기',
  result: '응모 결과',
}
const TABS: StepType[] = ['status', 'entry', 'result']

export const LuckyDraw = () => {
  const { nextStep, Step, step } = useFunnel(STEP_ORDER, 'tab')

  return (
    <>
      <Column className={'p-5'}>
        <JustifyBetween as={'nav'} className={'gap-7'}>
          {TABS.map((tab) => (
            <NavBarItem
              key={tab}
              isActive={step === tab}
              name={STEP_NAME[tab]}
              onClick={() => {
                nextStep(tab)
              }}
            />
          ))}
        </JustifyBetween>
        <Step name={'status'}>
          <Status />
        </Step>
      </Column>
    </>
  )
}
