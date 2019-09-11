import React from "react";
import TodoItem from "./TodoItem";
import propTypes from "prop-types";

function Todos(props) {
  //console.log(props.todos);
  return props.todos.map(todo => (
    <TodoItem key={todo.id} todo={todo} markComplete={props.markComplete} />
  ));
}

Todos.propTypes = {
  todos: propTypes.array.isRequired
};
export default Todos;
