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
        <input type="checkbox" onChange={props.markComplete.bind(this, id)} />{" "}
        {title}
      </p>
    </div>
  );
}

TodoItem.propTypes = {
  todo: propTypes.object.isRequired
};

export default TodoItem;
