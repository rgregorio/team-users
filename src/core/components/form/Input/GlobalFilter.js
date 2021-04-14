
import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

export const GlobalFilter = ({ filter, setFilter }) => {

  const [value, setValue] = useState(filter)

  const onChange = useAsyncDebounce(value => {
    console.log(value)
    setFilter(value || undefined)
  }, 100)

  return (
    <span>
      Search:{' '}
      <input
        value={value || ''}
        style={{ 
          marginBottom: "5%", 
          marginTop: "5%",
          border: "1px solid #ccc",
          height: "23px",
          width: "30%"
        }}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </span>
  )
}