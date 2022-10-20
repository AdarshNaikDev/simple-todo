import React from "react";
import Todo from "./Todo";
const TodoList =({todoArray})=>{

    console.log({todoArray})

    return(
        <div>
            {
                todoArray.map((todo)=>{
                    return(
                            
                     <Todo text ={todo.text}  idNo = {todo.id} ts ={todo.completed} key={todo.id} />
                    )
                    
                })
            }
            
        </div>
    )
}

export default TodoList