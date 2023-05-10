import React, { useCallback, useMemo, useState } from 'react'
import { FormInput, FormLabel } from '@ariakit/react'
import { InputFieldProps } from './types'
import { Info, Eye, EyeOff } from 'react-feather'
import './styles.css'
import Tooltip from '../Tooltip'
import classNames from 'classnames'

export default function InputField(props: InputFieldProps) {
	const {
		className,
		disabled = false,
		error,
		icon,
		label,
		name,
		type,
		helper,
		onFocus,
	} = props
	const [isVisible, setIsVisible] = useState(false)
	const inputType =
		type === 'password' ? (isVisible ? 'text' : 'password') : type

	const toggleShowPassword = () => {
		setIsVisible(!isVisible)
	}

	const headerClassNames = useMemo(
		() =>
			classNames(
				{
					'uk-header--marginBottom': label || helper,
				},
				'uk-header',
			),
		[label, helper],
	)

	const inputClassNames = useMemo(
		() =>
			classNames(
				{
					'uk-input--disabled': disabled,
					'uk-input--error': error,
				},
				'uk-input',
				className,
			),
		[disabled, error],
	)

	return (
		<div className="uk-container">
			<div className={headerClassNames}>
				{label && (
					<FormLabel className="uk-header__label" name={name}>
						{label}
					</FormLabel>
				)}
				{helper && (
					<Tooltip message={helper}>
						<Info size={14} className="uk-header__info" />
					</Tooltip>
				)}
			</div>
			<div className={inputClassNames}>
				{icon && <div className="uk-input__left__icon">{icon}</div>}
				<FormInput
					{...props}
					onFocus={onFocus}
					type={inputType}
					className="uk-input__field"
					disabled={disabled}
				/>
				{type === 'password' && (
					<button
						className="uk-input__button"
						onClick={toggleShowPassword}
						disabled={disabled}
					>
						{isVisible ? <EyeOff size={18} /> : <Eye size={18} />}
					</button>
				)}
			</div>
			{error && <span className="uk-error">{error}</span>}
		</div>
	)
}
