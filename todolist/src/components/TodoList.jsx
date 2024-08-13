import React from "react";

export default function TodoList()
{
    const todos = [
        "go to the gym", "go to the office"
    ]
    return(
        <ul>
           {todos.map((e,index)=>
        {
            return <li className="todoItem"> {e} <i class="fa-solid fa-pen-to-square"></i></li>
        })}
        </ul>
    )
}