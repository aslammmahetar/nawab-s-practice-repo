import React, { useEffect } from "react";
import TodoInput from "./TodoInput";
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { todoFails, todoReq, todoSuc } from "../Redux/todos/action";

const TodoList = () => {
  const { todo, isLoading } = useSelector((store) => {
    return {
      todo: store.todoReducer.todo,
      isLoading: store.todoReducer.isLoading,
    };
  }, shallowEqual);
  const dispatch = useDispatch();

  //
  const getTodo = () => {
    dispatch(todoReq());
    axios
      .get("http://localhost:8080/todos")
      .then((res) => dispatch(todoSuc(res.data)))
      .catch((er) => dispatch(todoFails()));
  };

  //
  useEffect(() => {
    getTodo();
    // console.log(data.todo);
  }, []);

  return (
    <div>
      <h1>Add Todo</h1>
      <TodoInput />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {todo.map((el, i) => {
            return (
              <ul key={i}>
                <li>{el.title}</li>
                <li>{el.status ? "completed" : "pending"}</li>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TodoList;
