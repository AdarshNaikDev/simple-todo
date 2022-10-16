import React from 'react'

const Form = ({setInputText, todos, setTodos, inputText})=>{

    const inputTextHandler =(e)=>{
        console.log(e.target.value)
        setInputText(e.target.value)
        
    }

    const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodos([
            ...todos , {text: inputText, completed:false, id:Math.random() * 1000}
        ])
        console.log("print the array", todos)
        

    }

    return(
        <>
            <form >
                <input type="text" onChange={inputTextHandler} placeholder="add client name"/>
                <button type='submit' onClick={submitTodoHandler}>Add</button>
                <div >
                <select>
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