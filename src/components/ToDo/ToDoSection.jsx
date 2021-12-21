import React, { useState, useEffect} from "react"

import CreateTodo from "./CreateTodo"
import TodoList from "./TodoList"

import * as profileService from '../../services/profileService'

const ToDoSection = (props)=> {
  const [todos , setTodos] = useState([])

  console.log('props.profile.tosos', props.profile.todos)

  const handleCreateTodo = async (formData) => {
    try {
      const newTodo = await profileService.createTodo(formData)
      setTodos([...todos, newTodo])
    } catch (error) {
      throw error
    }
  }

  const handleDeleteTodo = async (todoId) => {
    try {
    //   await profileService.deleteTodo(props.user.profile, todoId)
    //  setTodos(todos.filter(todo => todo._id !== todoId))
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    setTodos(props.profile.todos)
  }, [props.profile.todos])


  return (
    <div className="todo-section">
      <div className="header">
        <h3>Todo Section</h3>
        <div className="header-buttons"></div>
      </div>
      <CreateTodo {...props}
      handleCreateTodo={handleCreateTodo}
      />
      {todos && 
      <TodoList todos={todos}
      handleDeleteTodo={handleDeleteTodo} />
      
      }
    </div>
  )

}

export default ToDoSection