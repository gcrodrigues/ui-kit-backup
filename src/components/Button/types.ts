export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'warning'
		| 'info'
		| 'ghost'
		| 'default'
}

export enum ButtonVariants {
	Primary = 'primary',
	Success = 'success',
	Secondary = 'secondary',
	Warning = 'warning',
	Info = 'info',
	Ghost = 'ghost',
	Default = 'default',
}
