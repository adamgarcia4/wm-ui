import React, {
	useState,
	useEffect,
} from 'react'

// Styles
import styles from './button.module.scss'
import cx from 'classnames'
import PropTypes from 'prop-types'


export const Button = (props) => {
	const {
		style,
		onClick,
		children,
		debounce,
		disabled,
		className,
		styleName,
		onMouseEnter,
		onMouseLeave,
	} = props

	const [ timeoutId, setTimeoutId ] = useState(null)
	const [ isDebounced, setIsDebounced ] = useState(false)

	const isDisabled = disabled || isDebounced

	useEffect(() => {
		return () => {
			clearTimeout(timeoutId)
		}
	}, [])

	const handleClick = () => {
		onClick?.()
		if (debounce) {
			setIsDebounced(true)
			setTimeoutId(
				setTimeout(() => {
					setIsDebounced(false)
				}, debounce)
			)
		}
	}

	return (
		<button
			onClick={isDisabled ? () => {} : handleClick}
			className={cx(
				styles?.[styleName] || styles.secondary,
				className,
				isDisabled && styles.disabled,
				isDebounced && styles.debounced
			)}
			style={style}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{children}
		</button>
	)
}

Button.propTypes = {
	styleName: PropTypes.oneOf(['primary','secondary','valid','warning','alert', 'primary-light','light','secondary-light','valid-light','warning-light','alert-light','bid','offer','dark','best']),
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
	debounce: PropTypes.number,
	disabled: PropTypes.bool,
	label: PropTypes.string,
}

Button.defaultProps = {
	styleName: 'primary',
  onClick: ()=>{},
	debounce: null,
	disabled: false,
	label: "Button",
	onMouseEnter: ()=>{},
	onMouseLeave: ()=>{}
}
