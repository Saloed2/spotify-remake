import React, { ChangeEvent } from 'react'
import { useState } from 'react'

const useInputValue = (initialVal: string = ''): any => {

  const [value, setValue] = useState<string>(initialVal)

  const onChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  const cleanValue = () => {
    setValue('')
  }

  const changeValue = (val: string) => {
    setValue(val)
  }

  const bind = {
    value,
    onChange
  }
  

  return [value, bind, cleanValue, changeValue]
}

export default useInputValue
