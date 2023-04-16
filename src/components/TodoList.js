import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';
import "./TodoListStyles.css"

const TodoList = () => {
    const [todos, setTodos] = useState([
        {id : 1, text: 'Early morning daily prayer'},
     ]
    )
   const  deleteTodo= (id) => {
        const removedTodo = todos.filter( todo => {
           return todo.id !== id
        })
        setTodos(
        removedTodo)
        
      }

      const addTodos = (newTodo) => {
        newTodo.id = todos.length + 1
        let addedTodos = [...todos, newTodo];
          setTodos( addedTodos)
      }

  return (
    <div className='container'>
        <div className='todo-box'>
        <h1 className='heading'>What's your plans for Today ?</h1>
        <TodoForm onSubmit={addTodos} />
        <Todo todos = {todos} deleteTodo={deleteTodo} />
        </div>
        <div className='copywrite'>
         <p className='legal'>&copy; by Eskay Global</p>
        </div>
    </div>
  )
}

export default TodoList