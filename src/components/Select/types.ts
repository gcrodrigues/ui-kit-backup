import { ReactNode } from 'react'

export interface SelectProps {
	clearInputButtonText?: string | ReactNode
	comboboxPlaceholder?: string
	multiple?: boolean
	defaultValue?: string | string[]
	disabled?: boolean
	error?: string
	helper: string
	inputSearch?: boolean
	items: any[]
	label?: string
	matchKeys?: string[]
	onChange?: (item: string[] | string) => void
	placeholder?: string
	renderValue: string
	rightIcon?: ReactNode
	value: string | string[] | undefined
}
