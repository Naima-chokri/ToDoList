import { findByAltText } from '@testing-library/react';
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({addtask}) => {

  const [value, setValue] = useState('')

  const onChange = e => {setValue(e.target.value)}

  const onClick = () =>{
    addtask({id:uuidv4(), desc:value, isDone:false});
    setValue("")   //return state empty
  }
  return (
    <>
      <input onChange={onChange} value={value} placeholder="add new tasks" />
      <button onClick={onClick}>Add</button>
    </>
  )
}

export default TodoForm 
