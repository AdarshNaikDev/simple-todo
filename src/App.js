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
