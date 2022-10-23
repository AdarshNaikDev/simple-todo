import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");

  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  const filterHandler = () => {
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
          return todos;
        });
        break;
    }
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
        <button className="create-btn">+</button>
      </span>
      <div className="form-container">
        <Form
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setStatus={setStatus}
        />
      </div>
    </>
  );
}

export default App;
