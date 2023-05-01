import React, { useEffect, useState } from "react";
import { Todotypes } from "./TodoInput";
import axios from "axios";
import TodoItem from "./TodoItem";

const Todolist = () => {
  const [todos, setTodos] = useState<Todotypes[]>([]);

  const getTodo = async () => {
    try {
      let req = await axios.get("http://localhost:8080/todos");
      return req.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodo().then((res) => setTodos(res));
  }, []);

  return (
    <div>
      {todos.map((el) => {
        return <TodoItem key={el.id} {...el} />;
      })}
    </div>
  );
};

export default Todolist;
