'use client'

import { Popover, PopoverContent, PopoverTrigger } from '@heroui/react'
import { Icon } from '@repo/ui/components/Icon'
import { Text } from '@repo/ui/components/Text'
import { Column } from '@repo/ui/components/Layout'

export const InfoPopover = () => (
  <Popover placement='bottom-end'>
    <PopoverTrigger>
      <button>
        <Icon type={'questionMark'} />
      </button>
    </PopoverTrigger>
    <PopoverContent>
      <Column className='gap-1 px-1 py-2'>
        {/*Todo: 내용 변경 확인하기*/}
        {/*<Text fontWeight={'light'} fontSize={'xs'}>*/}
        {/*  4주간, 원하는 상품을 선택해서 응모 할 수 있습니다.*/}
        {/*</Text>*/}
        <Text fontWeight={'light'} fontSize={'xs'}>
          이벤트 기간 내에 사용하지 않은 응모권은 소멸됩니다.
        </Text>
      </Column>
    </PopoverContent>
  </Popover>
)
