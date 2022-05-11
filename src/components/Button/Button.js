// import PropTypes from 'prop-types';
import styles from './button.module.scss'
import PropTypes from 'prop-types';

import React, { useState, useEffect } from 'react'
import cx from 'classnames'

export const Button = ({
	styleName,
	className,
	disabled,
	style,
	children,
	onClick,
	debounce,
}) => {
	const [isDebounced, setIsDebounced] = useState(false)
	const [timeoutId, setTimeoutId] = useState(null)
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
				isDisabled && styles.disabled
			)}
			style={style}
		>
			{children}
		</button>
	)
}


Button.propTypes = {
	styleName: PropTypes.oneOf(['primary','secondary','valid','warning','alert', 'primary-light','light','secondary-light','valid-light','warning-light','alert-light','bid','offer','dark','best']),
  onClick: PropTypes.func,
	debounce: PropTypes.number,
	disabled: PropTypes.bool
}

Button.defaultProps = {
	styleName: 'primary',
  onClick: ()=>{},
	debounce: null,
	disabled: false
};

