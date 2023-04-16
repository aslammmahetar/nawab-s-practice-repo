import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFunc, reduceFunc, resetFunc } from "../Redux/counter/action";

const Counter = () => {
  const data = useSelector((store) => store.counterReducer.counter);
  console.log(data);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addFunc(1));
  };

  const handleReduce = () => {
    if (data > 0) {
      dispatch(reduceFunc(1));
    }
  };

  const handleReset = () => {
    dispatch(resetFunc());
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>Counter:{data}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReset}>RESET</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
};

export default Counter;
