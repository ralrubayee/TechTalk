import React, {useState , useEffect} from "react";

const ToDo = (props) => {
  console.log(props.todos._id)
console.log('this is todo props',props)
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