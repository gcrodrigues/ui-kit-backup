import type { Meta, StoryObj } from '@storybook/react'

import Button from '../Button'
import { ButtonVariants } from './types'

const meta: Meta<typeof Button> = {
	title: 'Button',
	component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Variants: Story = {
	args: {
		children: 'Choose the variation below',
		variant: ButtonVariants.Default,
	},
}

export const Disabled: Story = {
	args: {
		children: 'Button disabled',
		variant: ButtonVariants.Primary,
		disabled: true,
	},
}
