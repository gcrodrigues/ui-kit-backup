import React, { useCallback, useEffect, useMemo } from 'react'
import {
	SelectLabel,
	SelectPopover,
	Select as SelectComponent,
	SelectItem,
	useSelectStore,
	SelectArrow,
	SelectItemCheck,
	useComboboxStore,
	Combobox,
	ComboboxList,
	SelectList,
} from '@ariakit/react'
import classNames from 'classnames'
import { matchSorter } from 'match-sorter'
import { Info } from 'react-feather'
import { SelectProps } from './types'
import './styles.css'
import Tag from '../Tag'
import Tooltip from '../Tooltip'

export default function Select({
	clearInputButtonText = 'Clear',
	comboboxPlaceholder = 'Search',
	multiple,
	defaultValue = multiple ? [] : '',
	disabled = false,
	error,
	helper,
	inputSearch,
	items,
	label,
	matchKeys,
	onChange,
	placeholder,
	renderValue,
	rightIcon,
	value,
}: SelectProps) {
	const combobox = useComboboxStore({ resetValueOnHide: true })
	const comboboxValue = combobox.useState('value')

	const select = useSelectStore({
		combobox: inputSearch ? combobox : undefined,
		defaultValue: defaultValue,
		sameWidth: true,
		gutter: 4,
		value: value,
		setValue: onChange,
	})
	const inputValue = select.useState('value')
	const mounted = select.useState('mounted')

	const selectClassNames = useMemo(
		() =>
			classNames(
				{
					'uk-select--error': error,
					'uk-select--borderPrimary': !inputSearch,
					'uk-select--alignRight':
						(!placeholder && !inputValue) ||
						(!placeholder && Array.isArray(defaultValue)),
				},
				'uk-select',
			),
		[error, inputSearch, placeholder, defaultValue, inputValue],
	)

	const selectHeaderClassNames = useMemo(
		() =>
			classNames(
				{
					'uk-select__header--marginBottom': label || helper,
				},
				'uk-select__header',
			),
		[label, helper],
	)

	const selectPlaceholderClassNames = useMemo(
		() =>
			classNames(
				{
					'uk-select__placeholder--disabled': disabled,
				},
				'uk-select__placeholder',
			),
		[disabled],
	)

	const matches = useMemo(() => {
		return matchSorter(items, comboboxValue, {
			keys: matchKeys && matchKeys,
			baseSort: (a, b) => {
				return a.index < b.index ? -1 : 1
			},
		})
	}, [comboboxValue])

	const handleClick = useCallback(
		(selectedItem: string) => {
			if (Array.isArray(value)) {
				select.setValue(value.filter(item => selectedItem !== item))
				return
			}
			select.setValue(selectedItem)
		},
		[value],
	)

	const handleClearInputValue = useCallback(() => {
		select.setValue([])
	}, [])

	useEffect(() => {
		select.render()
	}, [inputValue])

	const handleShowSelecItems = useCallback(
		(items: any[]) =>
			items.map(item => {
				const renderedValue = renderValue ? item[renderValue] : item
				return (
					<>
						{multiple ? (
							<SelectItem
								className="uk-popover__select__item"
								value={renderedValue}
							>
								<SelectItemCheck />
								{renderedValue}
							</SelectItem>
						) : (
							<SelectItem
								className="uk-popover__select__item"
								value={renderedValue}
							/>
						)}
					</>
				)
			}),
		[items, renderValue],
	)

	return (
		<div className="uk-container">
			<div className={selectHeaderClassNames}>
				{label && (
					<SelectLabel className="uk-label" store={select}>
						{label}
					</SelectLabel>
				)}

				{helper && (
					<Tooltip message={helper}>
						<Info size={14} className="uk-header__info" />
					</Tooltip>
				)}
			</div>

			{!!inputValue.length && multiple && (
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: '8px',
						marginBottom: '8px',
					}}
				>
					<button onClick={handleClearInputValue} className="uk-clear__button">
						{clearInputButtonText}
					</button>
					{value &&
						Array.isArray(value) &&
						value.map(inpuValue => (
							<Tag
								hasButton
								key={inpuValue}
								onClick={() => handleClick(inpuValue)}
							>
								{inpuValue}
							</Tag>
						))}
				</div>
			)}

			<SelectComponent
				store={select}
				className={selectClassNames}
				disabled={disabled}
			>
				{placeholder && (!inputValue.length || multiple) && (
					<span className={selectPlaceholderClassNames}>{placeholder}</span>
				)}
				{!multiple && inputValue}
				<SelectArrow />
			</SelectComponent>

			{mounted && (
				<SelectPopover store={select} className="uk-popover" composite={false}>
					{inputSearch ? (
						<>
							<div className="uk-popover__combobox_wrapper">
								<div className="uk-popover__combobox">
									<Combobox
										store={combobox}
										placeholder={comboboxPlaceholder}
										className="uk-popover__combobox__input"
									/>
									{rightIcon}
								</div>
							</div>
							<ComboboxList store={combobox}>
								{handleShowSelecItems(matches)}
							</ComboboxList>
						</>
					) : (
						<SelectList store={select}>
							{handleShowSelecItems(matches)}
						</SelectList>
					)}
				</SelectPopover>
			)}
			{error && <span className="uk-error">{error}</span>}
		</div>
	)
}
