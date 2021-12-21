import React, {useState} from "react";
import Header from "./header";
import Form from "./Form";
import TodoList from "./TodoList";

const ToDo = () => {

const [input, setInput]= useState("");
const [todos, setTodos]= useState([]);

  return (
    <>
    <Header />
    <Form 
      input={input}
      setInput={setInput}
      todos={todos}
      setTodos={setTodos}
    />
    <TodoList 
      todos={todos}
      setTodos={setTodos}
    />
    </>
  )
}

export default ToDo;