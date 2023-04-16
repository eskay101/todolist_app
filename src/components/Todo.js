import React from 'react'
import "./TodoStyles.css"

const Todo = ({ todos , deleteTodo }) => {
    const todoList = todos.length ? (
        todos.map(todo => {
        return(
            <div key={todo.id} className='main-body'>
                <p className='main-text'>{todo.text}
                <button className='list-btn' onClick={() => {deleteTodo(todo.id)}}>x</button>
                </p>
            </div>
            
        )
        })
    ):(
       <p className='text-main'>Hello user, You have no schedule left!</p> 
    )
  return(
      <div>
       {todoList}
       
      </div>
  )
}
export default Todo