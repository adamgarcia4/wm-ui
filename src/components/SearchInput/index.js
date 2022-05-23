import React, { useCallback, useState } from "react"
import _ from "lodash"
import PropTypes from 'prop-types';
// Styles
import styles from './searchInput.module.scss'
import cx from 'classnames'

export default function SearchInput(props = {}) {
	const [value, setValue] = useState('')

	const handleChange = (event) => {
		const {
			onChange,
			withoutDebounce,
		} = props

		if (onChange) {
			setValue(event.target.value)
			if (!withoutDebounce) {
				debounce(event.target.value)
			}
		}
	}

	const handleDelete = () => {
		setValue('')
		if (props.onChange) {
			props.onChange('')
		}
	}

	const debounce = useCallback(
		_.debounce((_searchVal) => {
			props.onChange(_searchVal)
		}, 1200),
		[]
	)

	const isDifferent = (props.value ?? '') !== (value ?? '')

	return (
		<div className={cx(
			styles.root,
			props.className,
		)}>
			<input
				type="text"
				value={value}
				onChange={handleChange}
				className={cx(
					styles.input,
					value && styles.hasValue
				)}
				maxLength={props.maxLength || 20}
				placeholder={props.placeholder || "Search"}
			/>
			{isDifferent ? (
				<img
					src={require("images/spinner_24.gif")}
					className={styles.clearButton}
				/>
			) : props.value ? (
				<img
					src={require("images/icon-delete.svg")}
					onClick={handleDelete}
					className={styles.clearButton}
				/>
			) : null}
		</div>
	)
}

SearchInput.propTypes = {
  onChange: PropTypes.func,
	withoutDebounce: PropTypes.bool,
}

SearchInput.defaultProps = {
  onChange: ()=>{},
	withoutDebounce: false,
};

