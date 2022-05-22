import './App.css';
import { tasks } from './data';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import { useState } from 'react';

function App() {
  //use state to change value 
  const [data, setData] = useState(tasks)
  //change value of prev state
  const addtask = (x) =>{
    setData([...data,x])
  }
  // const remove = (x) =>{
  //   console.log(x)
  // }
  //remove task
 
  const remove = (x)=>{
  setData(data.filter(el => el.id!==x))
}
  const change = (x) => {
    console.log(x)
  }
   return (
    <div className="todo-app">
      <header className="App-header">
        <TodoForm addtask={addtask}/>
        <TodoList tasks={data} remove={remove} change={change}/>
      </header>
    </div>
  );
}

export default App;
