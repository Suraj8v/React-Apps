import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"
import { useState } from "react";

function App() {

  const [todos, setTodos] = useState(['go to the gym', 'go to the office']);

  function handleAddTodos(newTodo)
  {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList)
  }

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos}></TodoInput>
      <TodoList todos={todos}></TodoList>
    </>
  )
}

export default App
 