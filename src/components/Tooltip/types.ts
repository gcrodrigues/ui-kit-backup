import { ReactNode } from 'react'

export interface TooltipProps {
	as?: any
	message?: string
	children: ReactNode
	portal?: boolean
}
