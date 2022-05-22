import React from 'react'

const Todo = ({id,desc,isDone,remove,change}) => {
  const onClick= ()=>{
    remove({id})
  }
  const upDate = () => {
    
    change({id,desc})
  }
  return (
    <div>
      {desc}
      <button onClick={onClick}>x</button>
      <button onClick={upDate}>update</button>
    </div>
  )
}

export default Todo