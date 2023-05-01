import React from "react";
import { sts, todoObj } from "../constant";
import { patchTodo } from "../utils/api";

interface TodoItemProps extends todoObj {
  handleUpdate: () => void;
}

function TodoItem({ id, title, status, handleUpdate }: TodoItemProps) {
  const handleToggle = (id: number | undefined): void => {
    const patchToggle: sts = {
      status: !status,
    };
    patchTodo(patchToggle, id).then((res) => {
      console.log(res);
      handleUpdate();
    });
  };

  return (
    <div>
      <h3>
        {title} - {status ? "Compelted" : " Pending"}
      </h3>
      <button onClick={() => handleToggle(id)}>Toggle</button>
    </div>
  );
}

export default TodoItem;
