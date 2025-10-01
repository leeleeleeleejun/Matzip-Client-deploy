import { Header } from '@repo/ui/components/Header'
import { HeaderBackButton } from '@/_components/HeaderBackButton'
import { Flex } from '@repo/ui/components/Layout'
import { Icon } from '@repo/ui/components/Icon'
import { Text } from '@repo/ui/components/Text'
import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header
      left={<HeaderBackButton />}
      center={
        <Flex className={'gap-1.5'}>
          <Text variant={'heading2'}>기프티콘</Text>
          <Icon type={'headerGift'} />
        </Flex>
      }
    />
    {children}
  </>
)

export default Layout
