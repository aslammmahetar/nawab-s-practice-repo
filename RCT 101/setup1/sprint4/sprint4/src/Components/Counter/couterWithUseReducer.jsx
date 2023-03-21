import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_COUNT": {
      return state + 1;
    }
    case "DECREMENT_COUNT": {
      if (state < 1) {
        return (state = 0);
      }
      return state - 1;
    }
    case "COUNTER_RESET": {
      return (state = 0);
    }
    default: {
      throw new Error(`Invalid Action`);
    }
  }
};
const initState = 0;
function CouterWithUsrReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const val = useReducer(reducer, initState);
  console.log(val);

  const handleInc = () => {
    dispatch({ type: "INCREMENT_COUNT" });
  };
  const handleDec = () => {
    dispatch({ type: "DECREMENT_COUNT" });
  };
  const handleReset = () => {
    dispatch({ type: "COUNTER_RESET" });
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
        border: "dashed black",
        padding: "10px",
        backgroundColor: "teal",
        color: "white",
        borderRadius: "10px",
      }}
    >
      <h2>Couter with useReducer</h2>
      <h3>Counter :{state} </h3>
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

export default CouterWithUsrReducer;
