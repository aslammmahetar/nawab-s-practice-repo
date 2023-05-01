import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import { getTodo } from "../utils/api";
import { todoObj } from "../constant";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [todo, setTodo] = useState<todoObj[]>([]);
  const [change, setChange] = useState<boolean>(false);

  useEffect(() => {
    getTodo().then((res: todoObj[]) => setTodo(res));
  }, [change]);

  const handleUpdate = (): void => {
    setChange(!change);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput />
      <div>
        {todo.map((el: todoObj, ind: number) => {
          return <TodoItem key={ind} {...el} handleUpdate={handleUpdate} />;
        })}
      </div>
    </div>
  );
};

export default TodoApp;
