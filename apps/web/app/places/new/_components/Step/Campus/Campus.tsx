import { RadioGroup, Radio } from '@heroui/react'
import { Title } from '@/places/new/_components/Tilte'
import { useCampusStore } from '@/_store/campus'
import { CAMPUS, CAMPUS_LIST } from '@/_constants/campus'
import { Button } from '@repo/ui/components/Button'
import { Text } from '@repo/ui/components/Text'

export const Campus = () => {
  const { campus: initCampus } = useCampusStore()

  return (
    <>
      <Title title={'맛집에 가까운 캠퍼스는?'} />
      <RadioGroup defaultValue={initCampus} className={'flex-1'}>
        {CAMPUS_LIST.map((campus) => (
          <Radio key={campus} value={campus} size={'sm'}>
            <Text fontSize={'lg'} fontWeight={'semibold'} className={'ml-2'}>
              {CAMPUS[campus]} 캠퍼스
            </Text>
          </Radio>
        ))}
      </RadioGroup>
      <Button size={'medium'} className={'ui:min-w-full'}>
        다음
      </Button>
    </>
  )
}
