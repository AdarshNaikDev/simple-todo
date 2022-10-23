import React, { useState } from "react";
import "../Todo/todo.css";

const Todo = ({ idNo, text, ts, todo, todos, setTodos }) => {
  const [checked, setChecked] = useState(false);

  function deleteHandler() {
    console.log(todo);
    setTodos(todos.filter((el) => el.id !== todo.id));
  }
  function completeHandler() {
    var checked = true;
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  }

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <>
      <div className="todo-content">
        <div className="done-check">
          <input
            type="checkbox"
            name="switch"
            class="check"
            checked={checked}
            onChange={handleChange}
            onClick={completeHandler}
          ></input>
        </div>
        <div className="todo-text">
          <span>{text}</span>
        </div>
        <div className="delete-btn">
          <button onClick={deleteHandler}>
            <img src={require("../../asset/delete.png")} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
