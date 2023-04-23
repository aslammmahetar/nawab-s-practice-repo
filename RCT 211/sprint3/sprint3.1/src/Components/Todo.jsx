import React, { useCallback, useState } from "react";
import { TodoItem } from "./TodoItem";

let initialState = [
  { id: 1, title: "Task-1", status: true },
  { id: 2, title: "Task-2", status: true },
  { id: 3, title: "Task-3", status: false },
];

const Todo = () => {
  const [task, setTask] = useState(initialState);
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    const newTask = {
      id: Date.now(),
      title: title,
      status: false,
    };
    const afterUpdate = [...task, newTask];
    setTask(afterUpdate);
    setTitle("");
  };

  const handleDelete = useCallback((id) => {
    setTask((prev) => {
      return prev.filter((el) => {
        return el.id !== id;
      });
    });
  }, []);
  const handleToggle = useCallback((id) => {
    setTask((prev) => {
      return prev.map((el) => {
        return el.id === id ? { ...el, status: !el.status } : el;
      });
    });
  }, []);

  useCallback(() => {}, []);

  return (
    <div>
      <h2>Todo App</h2>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleAdd}>Add Todo</button>
      {task.map((el) => {
        return (
          <TodoItem
            key={el.id}
            {...el}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        );
      })}
    </div>
  );
};

export default Todo;
