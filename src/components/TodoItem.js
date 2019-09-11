import React from "react";
import propTypes from "prop-types";

function TodoItem(props) {
  const getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: props.todo.completed ? "line-through" : "none"
    };
  };

  const { id, title } = props.todo;
  return (
    <div style={getStyle()}>
      <p>
        <label>
          <input type="checkbox" onChange={props.markComplete.bind(this, id)} />{" "}
          {title}
        </label>
        <button style={btnStyle} onClick={props.delTodo.bind(this, id)}>
          x
        </button>
      </p>
    </div>
  );
}

TodoItem.propTypes = {
  todo: propTypes.object.isRequired
};
const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

export default TodoItem;
