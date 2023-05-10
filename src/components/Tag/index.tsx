import React from 'react'
import './styles.css'
import { TagProps } from './types'
import { X } from 'react-feather'
import classNames from 'classnames'

export default function Tag({
	children,
	onClick,
	color,
	borderColor,
	backgroundColor,
	hasButton,
}: TagProps) {
	const style = {
		color: `${color && color}`,
		backgroundColor: `${backgroundColor && backgroundColor}`,
		borderColor: `${borderColor && borderColor}`,
	}

	const tagClassNames = classNames({
		'uk-tag': true,
		'uk-tag--noButton': !hasButton,
	})

	return (
		<button
			style={color || borderColor ? style : undefined}
			className={tagClassNames}
			onClick={onClick}
		>
			<p className="uk-tag__text">{children}</p>
			{hasButton && (
				<span className="uk-tag__button" onClick={onClick}>
					<X size={12} />
				</span>
			)}
		</button>
	)
}
