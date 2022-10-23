import React,{useState, useEffect} from 'react';
import './App.css';
import Form from './Components/Form'
import TodoList from './Components/TodoList';

function App() {
  const[inputText, setInputText] = useState("")

  const[todos, setTodos] = useState([])
  const[status,setStatus] = useState("all")
  const[filteredTodos, setFilteredTodos] = useState([])

  useEffect(()=>{
    console.log("hey")
    filterHandler()
  },[todos,status])
  const filterHandler = ()=>{
   switch (status){
    case "completed":
      setFilteredTodos(todos.filter((todo)=> todo.completed === true))
      break;
    case "incomplete":
      setFilteredTodos(todos.filter((todo)=>todo.completed === false))
      break;
    default:
      setFilteredTodos(todos)
      break;
   }
    
  }

  return (
    <>
      <h1>
        Simple Todo List
      </h1>
      <Form setInputText={setInputText} todos={todos} setTodos={setTodos} inputText={inputText} setStatus={setStatus}/>
      <TodoList todos = {todos} setTodos = {setTodos} filteredTodos={filteredTodos}/>
      
    </>
  );
}

export default App;
