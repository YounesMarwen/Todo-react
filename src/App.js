import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import axios from "axios";

import "./App.css";

function App() {
  // const [todos, setTodos] = useState([
  const [todos, setTodos] = useState([]);
  //get all todos list
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then(res => {
          const todosList = res.data;
          setTodos(todosList);
        });
    }

    fetchData();
  }, []);

  //mark TODO as complete
  const markComplete = id => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  //delete TODO
  const delTodo = id => {
    // const todoToDel = [...todos.filter(todo => todo.id !== id)];
    // setTodos(todoToDel);

    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => {
        const todoToDel = [...todos.filter(todo => todo.id !== id)];
        setTodos(todoToDel);
      });
  };

  //Add new TODO
  const addTodo = title => {
    // add +1 to the last id of todos list
    // let newId = todos[todos.length - 1].id + 1;

    // create the last added object
    // const newTodo = {
    //   id: newId,
    //   title: title,
    //   completed: false
    // };
    // adding the added object to todos list
    // const newTodos = [...todos, newTodo];
    //setting the new value of todos
    // setTodos(newTodos);

    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: title,
        completed: false
      })
      .then(res => {
        const newTodos = [...todos, res.data];
        setTodos(newTodos);
      });
  };
  return (
    <Router>
      <div className="App">
        <Header />
        <Route
          exact
          path="/"
          render={props => (
            <React.Fragment>
              <div className="container">
                <Todos
                  todos={todos}
                  markComplete={markComplete}
                  delTodo={delTodo}
                />

                <AddTodo addTodo={addTodo} />
              </div>
            </React.Fragment>
          )}
        />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
