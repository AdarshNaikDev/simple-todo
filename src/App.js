import React,{useState} from 'react';
import './App.css';
import Form from './Components/Form'
import TodoList from './Components/TodoList';

function App() {
  const[inputText, setInputText] = useState("")

  const[todos, setTodos] = useState([])

  return (
    <>
      <h1 className='todo-title'>
        Simple Todo List
      </h1>
      <Form setInputText={setInputText} todos={todos} setTodos={setTodos} inputText={inputText}/>
      <TodoList todos = {todos} setTodos = {setTodos}/>
    </>
  );
}

export default App;
