import React from "react";

const ToDo = (props) => {
  return (
    <div 
    className="todo-item" 
    >
      <p>
    { props.todo.todo_text}
      </p>
    
        <button 
        className="button-delete task-button"
        id="delete-button"
        onClick={()=> props.handleDeleteTodo(props.todo._id) }
        >
        <i className="fa fa-trash"></i>
        </button>

      </div>
  
  )
}

export default ToDo;