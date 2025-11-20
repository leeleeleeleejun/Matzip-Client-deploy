'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { useUserQueries } from '@/_apis/queries/user'
import { Flex } from '@repo/ui/components/Layout'
import Image from 'next/image'
import { Text } from '@repo/ui/components/Text'

export const UserProfile = () => {
  const { data } = useSuspenseQuery(useUserQueries.detail())
  const { nickname, profileImageUrl, profileBackgroundHexCode } = data

  return (
    <Flex className={'gap-3'}>
      <Flex
        className={`h-12 w-12 justify-center rounded-full`}
        style={{ backgroundColor: `#${profileBackgroundHexCode}` }}
      >
        <Image
          src={profileImageUrl}
          alt={'profileImage'}
          width={35}
          height={35}
          quality={100}
        />
      </Flex>
      <Text fontSize={'sm'} fontWeight={'bold'}>
        {nickname}
      </Text>
    </Flex>
  )
}
