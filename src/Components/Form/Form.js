import React from "react";
import "../Form/form.css";

const Form = ({
  setInputText,
  todos,
  setTodos,
  inputText,
  setStatus,
  addTask,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    addTask(false);
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    //console.log(e.target.value)
    setStatus(e.target.value);
  };

  return (
    <>
      <div className="form-heading">
        <h1>
          Add a Note
          <img src={require("../../asset/task.png")} />
        </h1>
      </div>
      <hr />
      <div>
        <form>
          <textarea
            value={inputText}
            onChange={inputTextHandler}
            placeholder="Add a Note ✍️"
          />
          <div className="add-btn">
            <button class="btn" type="submit" onClick={submitTodoHandler}>
              <svg
                width="180px"
                height="60px"
                viewBox="0 0 180 60"
                class="border"
              >
                <polyline
                  points="179,1 179,59 1,59 1,1 179,1"
                  class="bg-line"
                />
                <polyline
                  points="179,1 179,59 1,59 1,1 179,1"
                  class="hl-line"
                />
              </svg>
              <span>Add</span>
            </button>
            {/* <button >
              Add
            </button> */}
          </div>
          {/* <div>
          <select onChange={statusHandler}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">InComplete</option>
          </select>
        </div> */}
        </form>
      </div>
    </>
  );
};

export default Form;
