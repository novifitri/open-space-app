import React from 'react'

function useInput(defaultValue = '') {
  const [value, setValue] = React.useState(defaultValue)

  function handleValueChange({ target }) {
    setValue(target.value)
  }

  return [value, setValue]
}

export default useInput
