import React from 'react'
import './styles.css'
import { TooltipProps } from './types'
import {
	TooltipAnchor,
	TooltipArrow,
	Tooltip as TooltipComponent,
	useTooltipStore,
} from '@ariakit/react'

export default function Tooltip({
	as,
	message,
	children,
	portal,
}: TooltipProps) {
	const tooltip = useTooltipStore()
	return (
		<>
			<TooltipAnchor className="uk-anchor" as={as} store={tooltip}>
				<div style={{ display: 'flex' }}>{children}</div>
			</TooltipAnchor>
			<TooltipComponent className="uk-tooltip" portal={portal} store={tooltip}>
				<TooltipArrow />
				{message}
			</TooltipComponent>
		</>
	)
}
