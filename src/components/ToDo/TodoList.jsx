import React from "react";
import ToDo from "./ToDo";

const TodoList = (props) => {


  return (
    <div className="todos">
      <div className="todos-container">
      {props.todos.map((todo)=>(
        <ToDo 
        todo={todo}
        todos={props.todos}
        handleDeleteTodo={props.handleDeleteTodo}
        />
      )).reverse()}
      </div>
    </div>
  )
}
export default TodoList;