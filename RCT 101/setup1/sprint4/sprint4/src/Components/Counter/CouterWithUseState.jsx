import { useState } from "react";

function CouterWithUseState() {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    if (count < 1) {
      return setCount(0);
    }
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  const btnStyle = {
    marginLeft: "10px",
    padding: "10px",
    paddingLeft: "15px",
    paddingRight: "15px",
    borderRadius: "8px",
    fontSize: "15px",
    color: "white",
    backgroundColor: "blue",
  };
  return (
    <div
      style={{
        width: "40%",
        border: "dashed white",
        padding: "10px",
        backgroundColor: "black",
        color: "white",
        borderRadius: "10px",
      }}
    >
      <h2>Couter with useState</h2>
      <h3>Counter : {count}</h3>
      <div
        style={{
          // border: "solid black",
          width: "70%",
          margin: "auto",
        }}
      >
        <button style={btnStyle} onClick={handleInc}>
          +
        </button>
        <button style={btnStyle} onClick={handleReset}>
          RESET
        </button>
        <button style={btnStyle} onClick={handleDec}>
          -
        </button>
      </div>
    </div>
  );
}

export default CouterWithUseState;
