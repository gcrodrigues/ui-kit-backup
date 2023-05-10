import React, { useCallback, useMemo, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { SelectProps } from './types'
import Select from '.'
import { Form, useFormStore } from '@ariakit/react'
import { Search, Trash } from 'react-feather'

const withForm = (
	Story: React.ComponentType<SelectProps>,
	context: { args: SelectProps },
) => {
	const form = useFormStore({})

	return (
		<Form store={form} style={{ width: '260px' }}>
			<Story {...context.args} />
		</Form>
	)
}

const SelectComponent = (args: SelectProps) => {
	const [inputValue, setInputValue] = useState<string | string[] | undefined>()

	const selectedItemData = useMemo(() => {
		return args.items.filter(item => {
			return inputValue?.includes(item[args.renderValue])
		})
	}, [inputValue])

	console.log(selectedItemData)

	const handleSelectItem = useCallback((selectedItem: string[] | string) => {
		if (Array.isArray(inputValue)) {
			const filtered = args.items.filter(item =>
				inputValue.includes(item[args.renderValue]),
			)
			setInputValue(filtered)
		}

		setInputValue(selectedItem)
	}, [])

	return <Select {...args} value={inputValue} onChange={handleSelectItem} />
}

const fruits = [
	{ value: 'Apple' },
	{ value: 'Pineapple' },
	{ value: 'Blueberry' },
	{ value: 'Peach' },
	{ value: 'Passionfruit' },
	{ value: 'Grape' },
	{ value: 'Strawberry' },
	{ value: 'Watermelon' },
]

const roles = [
	{ value: 'Admin' },
	{ value: 'Secretary' },
	{ value: 'Teacher' },
	{ value: 'Parent' },
	{ value: 'Principal' },
	{ value: 'Student' },
	{ value: 'Employee' },
]

const meta: Meta<SelectProps> = {
	title: 'Select',
	component: SelectComponent,
	decorators: [withForm],
}

export default meta
type Story = StoryObj<SelectProps>

export const Default: Story = {
	args: {
		items: fruits,
		matchKeys: ['value'],
		renderValue: 'value',
		label: 'Select your favorite fruit',
		placeholder: 'Placeholder',
	},
}

export const Helper: Story = {
	args: {
		items: fruits,
		matchKeys: ['value'],
		renderValue: 'value',
		placeholder: 'Select an option',
		label: 'Select your favorite fruit',
		helper: 'Eat fruits!',
	},
}

export const Multiple: Story = {
	args: {
		items: roles,
		clearInputButtonText: <Trash size={12} />,
		multiple: true,
		matchKeys: ['value'],
		renderValue: 'value',
		label: 'Roles',
	},
}

export const Combobox: Story = {
	args: {
		items: roles,
		multiple: true,
		inputSearch: true,
		matchKeys: ['value'],
		renderValue: 'value',
		rightIcon: <Search />,
		placeholder: 'Select user roles',
		comboboxPlaceholder: 'Find fruit',
	},
}

export const Error: Story = {
	args: {
		items: roles,
		multiple: true,
		inputSearch: true,
		matchKeys: ['value'],
		renderValue: 'value',
		rightIcon: <Search />,
		placeholder: 'Select user roles',
		error: 'Select at least one fruit',
	},
}

export const Disabled: Story = {
	args: {
		items: roles,
		multiple: true,
		inputSearch: true,
		matchKeys: ['value'],
		renderValue: 'value',
		rightIcon: <Search />,
		placeholder: 'Select user roles',
		disabled: true,
	},
}

export const ControlledSelectInput: Story = {
	args: {
		items: [
			{ id: '11', value: 'Admin' },
			{ id: '12', value: 'Secretary' },
			{ id: '13', value: 'Teacher' },
			{ id: '14', value: 'Parent' },
			{ id: '15', value: 'Principal' },
			{ id: '16', value: 'Student' },
			{ id: '17', value: 'Employee' },
		],
		multiple: true,
		inputSearch: true,
		matchKeys: ['value'],
		renderValue: 'value',
		rightIcon: <Search />,
		placeholder: 'Look DevTools Console',
	},
}
