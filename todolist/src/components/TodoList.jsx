import React from "react";
import TodoCard from './TodoCard'

export default function TodoList()
{

    let todos = ["go to the gym", "go to the office"]
   
    return (
        <ul>
            {todos.map((todo,todoIndex)=>
            {
                return(
                    <div>
                        <TodoCard key={todoIndex}>
                            <p>{todo}</p>
                        </TodoCard>
                    </div>
                )
            })}
        </ul>
    )
}