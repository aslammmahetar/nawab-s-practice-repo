import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };
  const handlereduce = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>Count : {count}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handlereduce}>Reduce</button>
    </div>
  );
};

export default Counter;
