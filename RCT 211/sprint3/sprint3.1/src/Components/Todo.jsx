import React, { useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [task, setTask] = useState([]);
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    const newTask = {
      id: Date.now(),
      title: title,
      status: false,
    };
    const afterUpdate = [...task, newTask];
    setTask(afterUpdate);
  };

  const handleDelete = (id) => {
    setTask((prev) => {
      return prev.filter((el) => {
        return el.id !== id;
      });
    });
  };
  const handleToggle = (id) => {
    setTask((prev) => {
      return prev.map((el) => {
        return el.id === id ? { ...el, status: !el.status } : el;
      });
    });
  };

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
