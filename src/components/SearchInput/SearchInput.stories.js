import React, { useState } from "react"
import SearchInput from "./SearchInput"

export default {
  title: 'SearchInput',
  component: SearchInput,
}

export const SearchInputStory = ({ ...props }) => {
	const array = ['frontend', 'backend', 'fullstack']
	const [filter, setFilter] = useState('')
	
	const onChange = (e) => {
		setFilter(e)
	}
	
	return (
		<div>
			<SearchInput {...props} onChange={onChange}>Panel Section</SearchInput>
			{array.map((item) => {
				if (item.includes(filter)) {
					return (
						<div>
							{item}
						</div>
					)
				}
			})}
		</div>
	) 
}
