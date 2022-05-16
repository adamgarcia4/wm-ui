import React, { useState } from "react"
import SearchInput from "./SearchInput"

export default {
  title: 'SearchInput',
  component: SearchInput,
	decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
}

export const SearchInputStory = ({ ...props }) => {
	const array = ['frontend', 'backend', 'fullstack']
	const [filter, setFilter] = useState('')
	
	const onChange = (e) => {
		setFilter(e)
	}
	
	return (
		<div>
			<SearchInput {...props} value={filter} onChange={onChange}>Panel Section</SearchInput>
			{array.map((item) => {
				if (item.includes(filter)) {
					return (
						<div style={{ textAlign: 'center', padding: '10px', fontSize: 16 }}>
							{item}
						</div>
					)
				}
			})}
		</div>
	) 
}
