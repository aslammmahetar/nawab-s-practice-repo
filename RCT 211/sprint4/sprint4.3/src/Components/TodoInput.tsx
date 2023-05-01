import React, { useState } from "react";
import { postTodo } from "../utils/api";
import { todoObj } from "../constant";

const TodoInput = () => {
  const [title, setTitle] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newTodo: todoObj = {
      title,
      status: false,
    };
    postTodo(newTodo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={title} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoInput;
