import React, { memo, useMemo } from "react";

const heavyTask = (delay) => {
  let start = Date.now();

  while (Date.now() - start < delay) {
    continue;
  }
  return true;
};

// const customCheck = (prev, curr) => {
//   return (
//     prev.status === curr.status &&
//     prev.id === curr.id &&
//     prev.title === curr.title
//   );
// };

export const TodoItem = memo(
  ({ id, title, status, handleDelete, handleToggle }) => {
    useMemo(() => {
      heavyTask(200);
    }, []);

    return (
      <div>
        <h2>{title}</h2>
        <h3>{status ? "Completed" : "Pending"}</h3>
        <button onClick={() => handleDelete(id)}>Delete</button>
        <button onClick={() => handleToggle(id)}>Toggle</button>
      </div>
    );
  }
  // customCheck
);
