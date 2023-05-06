import React, { useEffect, useMemo } from 'react'
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
  SelectList
} from '@ariakit/react';
import classNames from 'classnames';
import { matchSorter } from "match-sorter";
import { Info } from 'react-feather';
import { SelectProps } from './types';
import './styles.css'
import Tag from '../Tag';
import Tooltip from '../Tooltip';


export default function Select({ 
  clearInputButtonText = 'Clear',
  comboboxPlaceholder = 'Search',
  multiple,
  defaultValue = multiple ? [] : '' ,
  disabled = false,
  error,
  helper,
  inputSearch,
  items,
  keyValue,
  label,
  matchKeys,
  onChange = () => {},
  placeholder,
  renderValue,
  rightIcon
 }: SelectProps) {
  const combobox = useComboboxStore({ resetValueOnHide: true });
  const comboboxValue = combobox.useState("value")
  
  const select = useSelectStore({
    combobox: inputSearch ? combobox : undefined,
    defaultValue:  defaultValue,
    sameWidth: true,
    gutter: 4,
  });
  const inputValue = select.useState("value")
  const mounted = select.useState("mounted");

  const selectClassNames = classNames({ 
    'uk-select': true, 
    'uk-select--error': error,
    'uk-select--borderPrimary': !inputSearch,
    'uk-select--alignRight': !placeholder && !inputValue || !placeholder && Array.isArray(defaultValue)
  })

  const selectHeaderClassNames = classNames({
    "uk-select__header": true,
    "uk-select__header--marginBottom": label || helper
  })

  const selectPlaceholderClassNames = classNames({
    'uk-select__placeholder': true,
    'uk-select__placeholder--disabled': disabled
  })
  
  const matches = useMemo(() => { 
    return matchSorter(items, comboboxValue, {
      keys: matchKeys && matchKeys,
      baseSort: (a, b) => {
        return (a.index < b.index ? -1 : 1)},
    });
  }, [comboboxValue]);  

  const handleClick = (item: string) => {
    const selectedItems = items.filter(value => {
      return inputValue.includes(value[keyValue])
    })
    select.setValue(selectedItems.filter((value) => value[keyValue] !== item).map(value => value[keyValue]))
    onChange([])
  }

  const handleClearInputValue = () => {
    select.setValue([])
    onChange([])
  }

  const handleShowSelecItems = (items: any[]) => {
    return items.map(item => {
      const renderedValue = renderValue ? item[renderValue] : item
      return (
        <>
          {multiple ?(
            <SelectItem className="uk-popover__select__item" value={renderedValue}>
              <SelectItemCheck />
              {renderedValue}
            </SelectItem>
          ) : (
            <SelectItem className="uk-popover__select__item" value={renderedValue} />
          )}
        </>
      )
    })
  }

  useEffect(() => {
    select.render()
  }, [inputValue])

  return(
    <div className='uk-container'>
      <div className={selectHeaderClassNames}>
        {label && <SelectLabel className="uk-label" store={select}>{label}</SelectLabel>}
        
        {helper && (
          <Tooltip message={helper}>
            <Info size={14} className='uk-header__info'/>
          </Tooltip>
        )}
      </div>

      {!!inputValue.length && multiple && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '8px'}}>
          <button onClick={handleClearInputValue} className='uk-clear__button'>
            {clearInputButtonText}
          </button>
          {Array.from(inputValue).map((value) => (<Tag onClick={() => handleClick(value)}>{value}</Tag>))}
        </div>
      )}

      <SelectComponent store={select} className={selectClassNames} disabled={disabled}>
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
              <div className='uk-popover__combobox_wrapper'>
                <div className='uk-popover__combobox'>
                  <Combobox
                    store={combobox}
                    autoFocus
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
      {error && <span className='uk-error'>{error}</span>}
    </div>
  )  
}