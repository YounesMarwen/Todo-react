import React, { useState } from "react";

import propTypes from "prop-types";

function AddTodo(props) {
  const [newTodo, setNewTodo] = useState({
    title: ""
  });
  const onChange = event => {
    let copyNewTodo = { ...newTodo };
    copyNewTodo = event.target.value;
    setNewTodo({ [event.target.name]: copyNewTodo });
  };
  const onSubmit = event => {
    event.preventDefault();
    props.addTodo(newTodo.title);
    setNewTodo({ title: "" });
  };
  return (
    <form onSubmit={onSubmit} style={{ display: "flex" }}>
      <input
        type="text"
        name="title"
        placeholder="Add New Todo ..."
        style={{ flex: "10", padding: "5px" }}
        value={newTodo.title}
        onChange={onChange}
      />
      <input
        type="submit"
        value="Submit"
        className="btn"
        style={{ flex: "1" }}
      />
    </form>
  );
}

AddTodo.propTypes = {
  addTodo: propTypes.func.isRequired
};

export default AddTodo;
