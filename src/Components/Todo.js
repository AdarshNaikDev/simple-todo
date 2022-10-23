import React, { useState } from "react";

const Todo = ({ idNo, text, ts, todo, todos, setTodos }) => {
  const sumne = true;
  const [checkbtn, setCheckbtn] = useState("check");
  function deleteHandler() {
    console.log(todo);
    setTodos(todos.filter((el) => el.id !== todo.id));
  }
  function completeHandler() {
    checkbtn === "check" ? setCheckbtn("uncheck") : setCheckbtn("check");
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

  return (
    <>
      <div>
        <li>
          <h3>Task ID: {idNo}</h3>
          <h3>Title: {text}</h3>
          <h3>Status: {String(ts)}</h3>
        </li>
        <button onClick={completeHandler}>{checkbtn}</button>
        <button onClick={deleteHandler}>delete</button>
      </div>
    </>
  );
};

export default Todo;
