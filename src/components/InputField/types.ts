import { ReactNode } from 'react'

export interface InputFieldProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string
	name: string
	error?: string
	helper?: string
	icon?: ReactNode
}
