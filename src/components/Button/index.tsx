import React, { useMemo } from 'react'
import './styles.css'
import classNames from 'classnames'
import { ButtonProps, ButtonVariants } from './types'

export default function Button({
	children,
	className,
	disabled,
	variant = ButtonVariants['Default'],
	onClick,
}: ButtonProps) {
	const buttonClassName = useMemo(
		() =>
			classNames(
				{
					'uk-button--primary': variant === ButtonVariants['Primary'],
					'uk-button--secondary': variant === ButtonVariants['Secondary'],
					'uk-button--success': variant === ButtonVariants['Success'],
					'uk-button--warning': variant === ButtonVariants['Warning'],
					'uk-button--info': variant === ButtonVariants['Info'],
					'uk-button--ghost': variant === ButtonVariants['Ghost'],
					'uk-button--default': variant === ButtonVariants['Default'],
					'uk-button--disabled': disabled,
				},
				'uk-button',
				className,
			),
		[className, variant, disabled],
	)

	return (
		<button disabled={disabled} className={buttonClassName} onClick={onClick}>
			{children}
		</button>
	)
}
