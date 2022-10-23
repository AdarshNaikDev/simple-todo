import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import TodoList from "./Components/TodoList/TodoList";

function App() {
  const [inputText, setInputText] = useState("");

  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [addTask, setAddTask] = useState(null);


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

  const onAddTask = () => {
    setAddTask(true);
  };

  return (
    <>
      <div className="main-container">
        <div className="todo-title-container">
          <h1 className="todo-title">Todo List</h1>
        </div>
        <div className="todo-container">
          <TodoList
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
          />
        </div>
      </div>
      <span className="create-task-btn">
        <button className="create-btn" onClick={onAddTask}>
          +
        </button>
      </span>
      {addTask ? (
        <>
          <div className="form-container">
            <div className="backdrop">
              <div className="alert-box">
                <Form
                  setInputText={setInputText}
                  todos={todos}
                  setTodos={setTodos}
                  inputText={inputText}
                  setStatus={setStatus}
                  addTask={setAddTask}
                />
              </div>
            </div>
          </div>
        </>
      ) : null}
      <div className="end-credits">
        Built with ☕ and 💻 By <a href="">Adarsh Naik</a> ❤️
      </div>
    </>
  );
}

export default App;
