import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postSuc, todoFails, todoReq } from "../Redux/todos/action";

const TodoInput = () => {
  //   const data = useSelector((store) => store);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  console.log("re-render");

  const handleAddTodo = () => {
    dispatch(todoReq());
    const userTodo = {
      title: title,
      status: true,
    };
    axios
      .post("http://localhost:8080/todos", userTodo)
      .then((res) => dispatch(postSuc(res.data)))
      .catch((er) => dispatch(todoFails(er)));
    setTitle("");
  };
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
