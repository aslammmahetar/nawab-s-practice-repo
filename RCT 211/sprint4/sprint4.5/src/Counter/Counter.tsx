import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState<number>(0);

  const handleClick = (): void => {
    setCount((prev) => prev + 1);
  };

  const handleReduce = (): void => {
    setCount((prev) => prev - 1);
  };

  return (
    <div data-testid="counter">
      <h1 data-testid="heading">Counter App</h1>
      <h2 data-testid="body">Count : {count}</h2>
      <button data-testid="button" onClick={handleClick}>
        Add
      </button>
      <button data-testid="button" onClick={handleReduce}>
        Reduce
      </button>
    </div>
  );
};

export default Counter;
