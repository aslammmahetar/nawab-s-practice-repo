import { useReducer } from "react";

const reducer = (state, action) => {
  //   console.log(action);
  switch (action.type) {
    case "INCREMENT_AGE": {
      return {
        ...state,
        age: state.age + 1,
      };
    }
    case "DECREMENT_AGE": {
      return {
        ...state,
        age: state.age - 1,
      };
    }
    case "UPDATE_USERNAME": {
      return {
        ...state,
        userName: action.sanas,
      };
    }
    case "RESET_DETAILS": {
      return {
        ...initState,
      };
    }
    default: {
      throw new Error(`Action is ot valid`);
    }
  }
};

const initState = {
  userName: "",
  age: 18,
};
function Form1() {
  const [state, dispatch] = useReducer(reducer, initState);

  const handleInc = () => {
    dispatch({ type: "INCREMENT_AGE" });
  };
  const handleDec = () => {
    dispatch({ type: "DECREMENT_AGE" });
  };
  const handleInp = (e) => {
    dispatch({ type: "UPDATE_USERNAME", sanas: e.target.value });
  };
  const handleReset = () => {
    dispatch({ type: "RESET_DETAILS" });
    console.log(state);
  };
  const handleSubmit = () => {
    console.log(state);
  };

  return (
    <div
      style={{
        width: "50%",
        border: "solid pink",
        margin: "auto",
        marginTop: "25px",
        padding: "25px",
      }}
    >
      <h2>Form</h2>
      <label>
        USERNAME :
        <input type="text" onChange={handleInp} />
      </label>
      <br />
      <br />
      <button onClick={handleInc}>+</button>
      <span> age : {state.age}</span>
      <button onClick={handleDec}>-</button>
      <br />
      <br />
      <button onClick={handleSubmit}>Submit Details</button>
      <button onClick={handleReset}>RESET FIELDS</button>
    </div>
  );
}
export default Form1;
