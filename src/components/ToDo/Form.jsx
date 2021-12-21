import React from "react";
import {v4 as uuidv4} from "uuid"

const Form = (props) => {
  const onInputChange = (event) => {
    props.setInput(event.target.value);
  }

  const onFormSubmit =(event) => {
    event.preventDefault();
    props.setTodos([...props.todos, {id:uuidv4(), title: props.input, completed: false}])
    props.setInput("");
  }
return (
  <div>
    <form onSubmit={onFormSubmit}>
      <input 
      type="text" 
      placeholder="Enter a Todo..."
      className="task-input"
      value={props.input}
      required
      onChange={onInputChange}
      />
      <button
      className="button-add"
      type="submit"
      >Add</button>
    </form>
  </div>
)
}

export default Form;