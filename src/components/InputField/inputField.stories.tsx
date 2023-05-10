import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import InputField from '.'
import { Form, useFormStore } from '@ariakit/react'
import { InputFieldProps } from './types'
import { User } from 'react-feather'

const withForm = (
	Story: React.ComponentType<InputFieldProps>,
	context: { args: InputFieldProps },
) => {
	const form = useFormStore({ defaultValues: { email: '' } })

	return (
		<Form store={form} style={{ width: '260px' }}>
			<Story {...context.args} />
		</Form>
	)
}

const Input = (args: InputFieldProps) => {
	return <InputField {...args} />
}

const meta: Meta<InputFieldProps> = {
	title: 'Input Field',
	component: Input,
	decorators: [withForm],
}

export default meta
type Story = StoryObj<InputFieldProps>

export const Password: Story = {
	args: {
		type: 'password',
		name: 'password',
		placeholder: 'Digite sua senha',
		label: 'Senha',
	},
}

export const Error: Story = {
	args: {
		type: 'email',
		label: 'E-mail',
		defaultValue: 'google.com',
		required: true,
		error: 'Digite um e-mail válido',
	},
}

export const NoLabel: Story = {
	args: {
		name: 'text',
		placeholder: 'Digite seu nome completo',
	},
}

export const Helper: Story = {
	args: {
		name: 'text',
		helper: 'Digite seu nome completo',
		label: 'Nome',
	},
}

export const WithLeftIcon: Story = {
	args: {
		name: 'text',
		placeholder: 'example@email.com',
		icon: <User size={18} />,
		disabled: false,
	},
}

export const Disabled: Story = {
	args: {
		name: 'text',
		placeholder: 'example@email.com',
		disabled: true,
	},
}
