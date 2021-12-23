import React from "react";

const Form = (props) => {
  const onInputChange = (event) => {
    props.setInput(event.target.value);
  }


return (
  <div>
    <form onSubmit={props.handleSubmit}>
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