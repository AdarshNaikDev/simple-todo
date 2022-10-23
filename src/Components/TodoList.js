import React from "react";
import Todo from "./Todo";
const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div>
      {filteredTodos.map((todo) => {
        return (
          <Todo
            text={todo.text}
            idNo={todo.id}
            ts={todo.completed}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
