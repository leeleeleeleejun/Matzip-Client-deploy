import type { Meta, StoryObj } from '@storybook/nextjs'
import { Icon } from './Icon'
import { IconList } from './IconMap'
import { Column } from '../Layout'

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Icon>

// 단일 아이콘
export const Default: Story = {
  args: {
    type: 'chicken',
    size: 48,
  },
}

// 전체 아이콘
export const AllIcons: Story = {
  render: () => (
    <Column className={'ui:gap-4'}>
      {IconList.map((type) => (
        <Column
          key={type}
          className={'ui:items-center ui:text-center ui:text-xs'}
        >
          <Icon type={type} size={40} />
          <span>{type}</span>
        </Column>
      ))}
    </Column>
  ),
}
