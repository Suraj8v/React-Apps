import React from 'react'

export default function TodoCard() {
    const todos = ["go to the gym", "go to the office"]
  return (
    <div >
        <ul >
            {todos.map((e,index)=>
            {
                return <li className='todoItem'> {e} 
                <i class="fa-solid fa-pen-to-square"></i>
                <i className="fa-regular fa-trash-can"></i>
                </li>
            })}
        </ul>
    </div>
  )
}
