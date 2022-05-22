import React from 'react';
import Todo from './Todo';


const TodoList = ({tasks, remove,change}) => {
  return (
    <>
        {tasks.map(el => <Todo key={el.id} id={el.id} desc={el.desc} isDone={el.isDone} remove={remove} change={change}/>)}
    </>
  )
}

export default TodoList