import type { Meta, StoryObj } from '@storybook/nextjs'
import { Text } from './Text'

const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Sample Text',
    variant: 'body1',
  },
  argTypes: {
    as: {
      control: { type: 'text' },
      description: 'HTML 태그 또는 컴포넌트',
    },
    fontSize: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
    },
    fontWeight: {
      control: { type: 'select' },
      options: [
        'thin',
        'extralight',
        'light',
        'normal',
        'medium',
        'semibold',
        'bold',
        'extrabold',
        'black',
      ],
    },
    variant: {
      control: { type: 'select' },
      options: [
        undefined,
        'heading1',
        'heading2',
        'title1',
        'title2',
        'title3',
        'body1',
        'body2',
        'body3',
        'caption1',
        'caption2',
      ],
    },
  },
}

export default meta
type Story = StoryObj<typeof Text>

export const Playground: Story = {
  args: {
    children: 'Playground Text',
  },
}

export const Variants: Story = {
  render: () => (
    <div className='space-y-2'>
      <Text variant='heading1'>Heading1</Text>
      <Text variant='heading2'>Heading2</Text>
      <Text variant='title1'>Title1</Text>
      <Text variant='title2'>Title2</Text>
      <Text variant='title3'>Title3</Text>
      <Text variant='body1'>Body1</Text>
      <Text variant='body2'>Body2</Text>
      <Text variant='body3'>Body3</Text>
      <Text variant='caption1'>Caption1</Text>
      <Text variant='caption2'>Caption2</Text>
    </div>
  ),
}
