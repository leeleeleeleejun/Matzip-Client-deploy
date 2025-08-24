import type { ReactNode } from 'react'
import { useSearchParams } from 'next/navigation'
import { useUpdateQueryParam } from './useUpdateQueryParam'

export const useFunnel = <StepType extends string>(
  stepOrder: Record<StepType, string>,
  paramKey: string = 'step',
) => {
  const searchParams = useSearchParams()
  const updateUrl = useUpdateQueryParam()
  const stepParam = searchParams.get(paramKey) ?? Object.values(stepOrder)[0]

  const step =
    (Object.keys(stepOrder) as StepType[]).find(
      (key) => stepOrder[key] === stepParam,
    ) ?? (Object.keys(stepOrder)[0] as StepType)

  const nextStep = (step: StepType) => {
    updateUrl(paramKey, stepOrder[step])
  }

  const Step = ({
    name,
    children,
  }: {
    name: StepType
    children: ReactNode
  }) => {
    return name === step ? children : null
  }

  return { Step, nextStep, step }
}
