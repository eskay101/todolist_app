import React, { useState } from 'react'
import "./TodoFormStyles.css"


function TodoForm(props) {
    const [input, setInput] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault();
        

       props.onSubmit({ 
          id: Math.floor(Math.random() *100),
            text: input
        });
        setInput('');

        }
        const handleChange = (e) =>{
            setInput (e.target.value)
    };
  return (
    <form className='todo-form' onSubmit={handleSubmit} id='todo-form'>
        <input type='text' placeholder='Enter your todo-list'
        value={input} name='text'className='input' onChange={handleChange} />
        <button className='input-btn'>Add Todo</button>
    </form>
  )
}

export default TodoForm