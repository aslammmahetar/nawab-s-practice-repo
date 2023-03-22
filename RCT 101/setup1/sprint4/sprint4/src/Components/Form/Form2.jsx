import { useReducer } from "react";

const initialState = {
  userName: "",
  age: 18,
  country: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_USERNAME": {
      return {
        ...state,
        userName: action.sanas,
      };
    }
    case "INCREACE_AGE": {
      return {
        ...state,
        age: state.age + 1,
      };
    }
    case "DECREACE_AGE": {
      return {
        ...state,
        age: state.age - 1,
      };
    }
    case "UPDATE_COUNTRY": {
      return {
        ...state,
        country: action.sanas,
      };
    }
    case "RESET_VALUES": {
      return {
        ...initialState,
      };
    }
    default: {
      throw new Error(`Invalid action : ${action.type}`);
    }
  }
};

function Form2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { userName, age, country } = state;

  const UpdateDetail = () => {
    console.log(state);
    dispatch({ type: "RESET_VALUES" });
  };

  return (
    <div
      className="formDiv"
      style={{
        width: "40%",
        margin: "auto",
        border: "dashed lightblue",
        padding: "15px",
        backgroundColor: "teal",
        color: "white",
        borderRadius: "10px",
      }}
    >
      <h2>Form with useReducer</h2>
      <label htmlFor="" style={{ fontSize: "larger" }}>
        Username :
        <input
          type="text"
          value={userName}
          onChange={(e) =>
            dispatch({ type: "UPDATE_USERNAME", sanas: e.target.value })
          }
          style={{
            width: "60%",
            padding: "8px",
            borderRadius: "8px",
            fontSize: "15px",
          }}
          placeholder="Enter your username"
        />
      </label>
      <br />
      <br />
      <div>
        <button
          onClick={() => dispatch({ type: "INCREACE_AGE" })}
          style={{
            marginRight: "15px",
            paddingLeft: "15px",
            paddingRight: "15px",
            paddingBottom: "4px",
            paddingTop: "4px",
            fontSize: "14px",
            borderRadius: "6px",
            backgroundColor: "lightgreen",
          }}
        >
          +
        </button>
        <span>Age : {age}</span>
        <button
          onClick={() => dispatch({ type: "DECREACE_AGE" })}
          style={{
            marginLeft: "15px",
            paddingLeft: "15px",
            paddingRight: "15px",
            paddingBottom: "4px",
            paddingTop: "4px",
            fontSize: "14px",
            borderRadius: "6px",
            backgroundColor: "lightgreen",
          }}
        >
          -
        </button>
        <br />
        <br />
        <select
          value={country}
          style={{
            padding: "4px",
            borderRadius: "6px",
            backgroundColor: "lightgreen",
          }}
          onChange={(e) =>
            dispatch({ type: "UPDATE_COUNTRY", sanas: e.target.value })
          }
        >
          <option value="">---SELECT COUNTRY---</option>
          <option value="India">India</option>
          <option value="China">China</option>
        </select>
        <br />
        <br />
        <button
          style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingBottom: "6px",
            paddingTop: "6px",
            fontSize: "15px",
            borderRadius: "8px",
            backgroundColor: "lightgreen",
          }}
          onClick={UpdateDetail}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
export default Form2;
