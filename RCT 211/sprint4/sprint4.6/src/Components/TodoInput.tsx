import axios from "axios";
import React, { useState } from "react";

export type Todotypes = {
  id?: number;
  title: string;
  status: boolean;
};

const TodoInput = () => {
  const [title, setTitle] = useState<string>("");

  const handleAdd = (): void => {
    const newTodo: Todotypes = {
      title: title,
      status: false,
    };
    axios.post("http://localhost:8080/todos", newTodo);
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      />
      <button onClick={handleAdd}>Add todo</button>
    </div>
  );
};

export default TodoInput;
