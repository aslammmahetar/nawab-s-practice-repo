import React, { useEffect } from "react";
import TodoInput from "./TodoInput";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../Redux/actoin";

const TodoList = () => {
  const todos = useSelector((store) => store.todos);
  //   console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo);
    // getTodo(dispatch);
  }, []);

  return (
    <div>
      <TodoInput />
      <div>
        {todos.map((el, ind) => {
          return (
            <p>
              {el.title} - {el.status ? "Completed" : "Not Completed"}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
