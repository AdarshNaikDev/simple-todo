import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");

  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);


  useEffect(()=>{
    console.log("to get from local storage")
      getLocalTodos();
  },[]);

  useEffect(()=>{
    console.log("hey")
    filterHandler();
    saveLocalTodos();
  },[todos,status])

 

  const saveLocalTodos=()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  }

  const getLocalTodos = ()=>{
    if(localStorage.getItem("todos") === null)
    {
      console.log("setitem run agtha ide")
      localStorage.setItem("todos", JSON.stringify([]))
    }
    else
    { 
      console.log("parse hatra banthu")
      let todoListFromLocal = JSON.parse(localStorage.getItem('todos'));
      console.log("local stoarage",todoListFromLocal)
      setTodos(todoListFromLocal)
    }
  }
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
      <div className="main-content">
        <h1 className="todo-title">Simple Todo List</h1>
        <Form
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setStatus={setStatus}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
      </div>
    </>
  );
}

export default App;
