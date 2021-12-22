import React, {useState , useEffect} from "react";

const ToDo = (props) => {
console.log('this is todo props',props)
  return (
    <div 
    className="todo-item" 
    >
      <p>
     { props.todo.todo_text}
      </p>
      <div>
        {/* <button className="button-complete task-button">
        <i className="fa fa-check-circle"></i> */}
        {/* </button> */}
        <button 
        className="button-delete task-button"
        onClick={()=> props.handleDeleteTodo(props.todos._id) }
        >
        <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  )
}

export default ToDo;