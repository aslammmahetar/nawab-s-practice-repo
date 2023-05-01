import React, { useEffect, useState } from "react";
import { Todo } from "../constant";
import { getTodo, postTodo } from "../api";
import TodoItem from "./TodoItem";

const TodoInput = () => {
  const [title, setTitle] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      title,
      status: false,
    };
    postTodo(newTodo);
  };

  useEffect(() => {
    getTodo().then((res) => {
      setTodos(res);
    });
  }, [todos]);

  return (
    <div>
      <h1>Todo App With TS</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Add Todo</button>
      </form>
      <div>
        {todos.map((el: Todo) => {
          return <TodoItem key={el.id} {...el} />;
        })}
      </div>
    </div>
  );
};

export default TodoInput;
