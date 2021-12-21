import React from "react";
import ToDo from "./ToDo";

const TodoList = (props) => {


  return (
    <div>
      {props.todos.map((todo)=>(
        <ToDo 
        todo={todo}
        todos={props.todos}
        handleDeleteTodo={props.handleDeleteTodo}
        />
      ))}
    </div>
  )
}
export default TodoList;