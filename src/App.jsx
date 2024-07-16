import { useState } from 'react';
import './App.css';
import TodoControl from './TodoControl';
import TodoList from './TodoList';

function App() {
  const [todoList,setTodoList]=useState("");
  const data=(e)=>{
     setTodoList(e)
  }
  return (
    <div className="App" style={{backgroundColor:'orange'}} >
        <TodoControl onFormSubmit={data}></TodoControl>
        <TodoList todoList={todoList}></TodoList>
    </div>
  );
}

export default App;
