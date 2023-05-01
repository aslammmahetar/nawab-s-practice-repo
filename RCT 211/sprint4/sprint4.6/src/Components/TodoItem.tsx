import React from "react";
import { Todotypes } from "./TodoInput";
import axios from "axios";

const TodoItem = ({ title, status, id }: Todotypes) => {
  const patchTodo = async () => {
    type status = {
      status: boolean;
    };
    const patchUpdate: status = {
      status: !status,
    };
    axios
      .patch(`http://localhost:8080/todos/${id}`, patchUpdate)
      .then((res) => console.log(res));
  };

  return (
    <div>
      <h2>{title}</h2>
      <h3>{status ? "Completed" : "pending"}</h3>
      <button onClick={patchTodo}>Toggle</button>
      <button>Delete</button>
    </div>
  );
};

export default TodoItem;
