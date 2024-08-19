import React from "react";
import TodoCard from './TodoCard'

export default function TodoList(props)
{  
    const { todos} = props;
    return (
        <ul>
            {todos.map((todo,todoIndex)=>
            {
                return (
                  <div>
                    <TodoCard
                      {...props}
                      key={todoIndex}
                      index={todoIndex}
                    >
                      <p className='todo'>{todo}</p>
                    </TodoCard>
                  </div>
                );
            })}
        </ul>
    )
}


