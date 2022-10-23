import React from 'react'

const Form = ({setInputText, todos, setTodos, inputText, setStatus})=>{

    const inputTextHandler =(e)=>{
       
        setInputText(e.target.value)
        
        
    }

    const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodos([
            ...todos , {text: inputText, completed: false, id:Math.random() * 1000}
        ])
        //console.log("print the array", todos)
        setInputText("")
        

    }

    const statusHandler = (e)=>{
        //console.log(e.target.value)
        setStatus(e.target.value)
    }

    return(
        <>
            <form >
                <textarea rows={10} cols={20} value={inputText} onChange={inputTextHandler} placeholder="add a note"/>
                <button type='submit' onClick={submitTodoHandler}>Add</button>
                <div >
                <select onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value= "completed">Completed</option>
                    <option value="incomplete">InComplete</option>
                </select>

                </div>
            </form>
        </>
    )
}

export default Form