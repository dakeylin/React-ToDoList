import React from 'react'

export default function ToDo({todo, toggleTask, removeTask}) {
  return (
    <div id={todo.id} className='item-todo'>
        <div className={todo.complete ? "item-text strike" : "item-text"} onClick={() => toggleTask(todo.id)}>
            {todo.task}
        </div>
        <div className='item-delete' onClick={() => removeTask(todo.id)}>X</div>
    </div>
  )
}
