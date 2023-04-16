import React from "react";
import Counter from "./Components/Counter";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

const Home = () => {
  return (
    <div>
      <Counter />
      <h1>Todo App</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default Home;
