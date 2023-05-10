import type { Meta, StoryObj } from '@storybook/react'
import { TagProps } from './types'
import Tag from '.'

const meta: Meta<TagProps> = {
	title: 'Tag',
	component: Tag,
}

export default meta
type Story = StoryObj<TagProps>

export const Default: Story = {
	args: {
		children: 'Front-end',
	},
}

export const WithButton: Story = {
	args: {
		children: 'Front-end',
		hasButton: true,
		color: '#fff200',
		backgroundColor: 'rgba(154, 0, 0, 0.412)',
		borderColor: 'rgb(255, 0, 0)',
	},
}
