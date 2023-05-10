import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Tooltip from '.'
import { TooltipProps } from './types'
import Button from '../Button'

const TooltipComponent = (args: TooltipProps) => {
	return <Tooltip {...args}>{args.children}</Tooltip>
}

const meta: Meta<TooltipProps> = {
	title: 'Tooltip',
	component: TooltipComponent,
}

export default meta
type Story = StoryObj<TooltipProps>

export const Default: Story = {
	args: {
		message: 'Hi there! 👋🏼',
		children: <Button variant="primary">Hover or Focus</Button>,
	},
}
