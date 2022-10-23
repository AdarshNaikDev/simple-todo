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
  const [dropdown, setDropdown] = useState(false)

  useEffect(() => {
    console.log("to get from local storage");
    getLocalTodos();
  }, []);

  useEffect(() => {
    console.log("hey");
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      console.log("setitem run agtha ide");
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      console.log("parse hatra banthu");
      let todoListFromLocal = JSON.parse(localStorage.getItem("todos"));
      console.log("local stoarage", todoListFromLocal);
      setTodos(todoListFromLocal);
    }
  };
  const filterHandler = () => {
    console.log("file handler execution started")
    console.log("in filehandler", status)
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "incomplete":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(() => {
          for (let i = 0; i < todos.length; i++) {
            if (todos[i].completed === true) {
              todos.push(todos[i]);
              todos.splice(i, 1);
            }
          }
          console.log(todos);
          return todos;
        });
        break;
    }
  };

  const onAddTask = () => {
    setAddTask(true);
  };

  const updateStatus = (e)=>{
    console.log(e.target.id)
    setStatus(e.target.id)
    setDropdown(false)
    filterHandler();
  }

  function dropdownHandler (){

    setDropdown(!dropdown)
  }

  return (
    <>
      <div className="main-container">
        <div className="todo-title-container">

          
          
          <img onClick={dropdownHandler} className="filter-icon" src={require('./asset/filter.png')}></img>
          
          <h1 className="todo-title">Todo App</h1>
        </div>
        <div className="todo-container">
        <div className={dropdown? 'dropdown-visible': 'dropdown-invisible'}>
            <a href="#"  id="all" onClick={updateStatus}>All Todo's</a>
            <a href="#" id="completed" onClick={updateStatus}>Completed Todo's</a>
            <a href="#" id="incomplete" onClick={updateStatus}>Incomplete Todo's</a>
          </div>
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
