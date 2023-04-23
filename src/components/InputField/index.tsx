import React, { useState } from 'react'
import { FormInput, FormLabel } from '@ariakit/react';
import { InputFieldProps } from './types';
import { Info, Eye, EyeOff } from 'react-feather'
import './styles.css'
import Tooltip from '../Tooltip';
import classNames from 'classnames';

export default function InputField(props: InputFieldProps) {
  const { className, error, icon, label, name, type, helper, onFocus } = props
  const [isVisible, setIsVisible] = useState(false)

  const inputType = type === "password" ? (isVisible ? "text" : "password") : type;

  const toggleShowPassword = () => {
    setIsVisible(!isVisible);
  };

  const inputClassnames = classNames({
    'uk-input': true,

    'uk-input--error': error,
    [className!]: className
  });

  return(
    <div className='uk-container'>
        <div className="uk-header">
          {label && (
            <FormLabel className='uk-header__label' name={name}>{label}</FormLabel>
          )}
          {helper && (
            <Tooltip message={helper}>
              <Info size={14} className='uk-header__info'/>
            </Tooltip>
          )}
        </div>
      <div className={inputClassnames}>
        {icon && (
          <div className='uk-input__left__icon'>
            {icon}
          </div>
        )}
        <FormInput {...props} onFocus={onFocus} type={inputType} className='uk-input__field'/>
          {type === 'password' && (
            <button className='uk-input__button' onClick={toggleShowPassword}>
              {isVisible ? <EyeOff size={18}/> : <Eye size={18}/>}
            </button>
          )}
      </div>
      {error && <span className='uk-error'>{error}</span>}
    </div>
  )
}