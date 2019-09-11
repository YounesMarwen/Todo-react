import React, { useState } from "react";
import "./App.css";
import Todos from "./components/Todo";

function App() {
  // const [todos, setTodos] = useState([
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Take out the trash",
      completed: false
    },
    {
      id: 2,
      title: "Dinner with wife",
      completed: false
    },
    {
      id: 3,
      title: "Meeting with boss",
      completed: false
    }
  ]);
  const markComplete = id => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
    console.log(todos);
  };
  return (
    <div className="App">
      <Todos todos={todos} markComplete={markComplete} />
    </div>
  );
}

export default App;
