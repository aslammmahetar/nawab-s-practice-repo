import React from "react";

const TodoItem = ({ id, title, status, handleDelete, handleToggle }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{status ? "Completed" : "Pending"}</h3>
      <button onClick={() => handleDelete(id)}>Delete</button>
      <button onClick={() => handleToggle(id)}>Toggle</button>
    </div>
  );
};

export default TodoItem;
