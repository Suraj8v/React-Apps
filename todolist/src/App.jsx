import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"
import { useState, useEffect } from "react";

function App() {

  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('')

  function persistData(newList)
  {
    localStorage.setItem('todos', JSON.stringify({todos:newList}))
  }

  function handleAddTodos(newTodo)
  {
    const newTodoList = [...todos, newTodo];
   // persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index)
  {
    const newTodoList = todos.filter((todo, todoIndex)=>
    {
      return todoIndex !== index;
    })
    //persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index)
  {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  // useEffect(()=>
  // {
  //   if(!localStorage)
  //   {
  //     return
  //   }
  //   let localTodos = localStorage.getItem('todos')
  //   if(!localStorage)
  //   {
  //     return
  //   }
  //   localTodos = JSON.parse(localTodos).todos
  //   setTodos(localTodos)
  // },[])

  return (
    <>
      <TodoInput
        handleAddTodos={handleAddTodos}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      ></TodoInput>
      <TodoList
        handleEditTodo  = {handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}
      ></TodoList>
    </>
  );
}

export default App
 