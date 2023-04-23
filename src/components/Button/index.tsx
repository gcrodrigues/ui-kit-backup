import React from "react"
import  './styles.css'
import classNames from "classnames";
import { ButtonProps, ButtonVariants } from "./types";

export default function Button({ children, variant = ButtonVariants['Default'], className, onClick }: ButtonProps) {
  const buttonClassName = classNames({
    'button': true,

    //Button variants classes
    'button--primary': variant === ButtonVariants['Primary'],
    'button--secondary': variant === ButtonVariants['Secondary'],
    'button--success': variant === ButtonVariants[ 'Success'],
    'button--warning': variant === ButtonVariants['Warning'],
    'button--info': variant === ButtonVariants['Info'],
    'button--ghost': variant === ButtonVariants['Ghost'],
    'button--default': variant === ButtonVariants[ 'Default'],

    [className!]: className
  });

  return(
    <button className={buttonClassName} onClick={onClick}>{children}</button>
  )
}