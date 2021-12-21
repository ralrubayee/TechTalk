import React from "react";

const TodoList = (props) => {
  console.log(props.todos)
  return (
    <div>
      {props.todos.map((todo)=>(
        <li 
        className="todo-list" 
        key={todo.id}
        >
          <input 
          type="text" 
          value={todo.title}
          className="list"
          onChange={(event)=> event.preventDefault()}
          />
        </li>
      ))}
    </div>
  )
}
export default TodoList;