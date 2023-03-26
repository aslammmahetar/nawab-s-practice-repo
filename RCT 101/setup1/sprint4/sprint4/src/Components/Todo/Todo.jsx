import { useReducer } from "react";
import AddTodo from "./AddTodo";
import { reducer, initialState } from "./reducer";

function Todo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);

  const handleAdd = (task) => {
    dispatch({ type: "ADD_TODO", sanas: task });
  };
  const handleDone = (id) => {
    dispatch({ type: "DONE_TODO", sanas: id });
  };
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TODO", sanas: id });
  };

  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        border: "2px dotted",
        borderRadius: "10px",
        backgroundColor: "lightseagreen",
      }}
    >
      <AddTodo handleAdd={handleAdd} />
      {state.map((el) => {
        return (
          <div
            style={{
              border: "1px solid pink",
              marginTop: "10px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              justifyContent: "space-around",
            }}
            key={el.id}
          >
            <h4>{el.title}</h4>
            <h4>{el.status ? "COMPLETED" : "NOT COMPLETED"}</h4>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <button onClick={() => handleDone(el.id)}>Done ☑️</button>
              <button onClick={() => handleDelete(el.id)}>Delete ❌</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Todo;
