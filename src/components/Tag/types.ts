import { PropsWithChildren } from 'react'

export interface TagProps extends PropsWithChildren {
	onClick: React.MouseEventHandler<HTMLButtonElement>
	color?: string
	borderColor?: string
	backgroundColor?: string
	hasButton?: boolean
}
