import React,{useState} from 'react';
import './App.css';
import Form from './Components/Form'
import TodoList from './Components/TodoList';

function App() {
  const[inputText, setInputText] = useState("")

  const[todos, setTodos] = useState([])

  return (
    <>
      <h1>
        CA's Client Listsj
      </h1>
      <Form setInputText={setInputText} todos={todos} setTodos={setTodos} inputText={inputText}/>
      <TodoList todos = {todos} setTodos = {setTodos}/>
    </>
  );
}

export default App;
