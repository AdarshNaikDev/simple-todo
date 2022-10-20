
import React from "react";

const Todo = ({idNo,text, ts})=>{
    const sumne = true;
    //console.log("props in todo component")
    console.log(ts)
    return (
        <>
        <div>
            <li >
            
                <h3>Task ID: {idNo}</h3>
                <h3>Title: {text}</h3>
                <h3>Status: {String(ts)}</h3>
            </li>
            <button>
                check
            </button>
            <button>
                delete
            </button>

            
        </div>
        </>
    )

}

export default Todo;