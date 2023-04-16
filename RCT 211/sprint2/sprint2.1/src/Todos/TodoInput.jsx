import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handlepost } from "../Redux/actoin";

const TodoInput = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(handlepost(todo));
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addHandler}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
