import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import { useState } from "react";
import { v4 } from 'uuid'
import DarkMode from "./components/DarkMode/DarkMode";
import './App.css'

function App() {

  const [todos, setTodos] = useState([]
  )

  const addToDo = (text) => {
    const newTodo = {
      id: v4(),
      title: text,
      isCompleted: false
    }
    console.log(todos)
    setTodos([...todos, newTodo])
  }

  const checkToDo = (id) => {
    setTodos(todos.map((item) => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted
      }
      return item;
    }))
  }

  const deleteToDo = (id) => {
    setTodos(todos.filter((item) => {
      return item.id !== id
    }))
  }

  return (
    <div className="App-header" >
      <DarkMode />
      <ToDoForm addToDo={addToDo} />
      <ToDoList todoData={todos} checkToDo={checkToDo} deleteToDo={deleteToDo} />

    </div >
  );
}

export default App;
