import { Icon, IconType } from '@repo/ui/components/Icon'
import { Flex, JustifyBetween } from '@repo/ui/components/Layout'
import { Text } from '@repo/ui/components/Text'

type Props = {
  href: string
  title: string
  icon: IconType
}

export const ProfileMenuItem = ({ href, title, icon }: Props) => (
  <JustifyBetween as={'a'} href={href}>
    <Flex className={'gap-2.5'}>
      <Icon type={icon} size={18} />
      <Text variant={'body1'}>{title}</Text>
    </Flex>
    <Icon type={'arrowRight'} size={18} color={'--color-gray-200'} />
  </JustifyBetween>
)
