import { useState } from "react";

const AddTodo = ({ handleAdd }) => {
  const [text, setText] = useState("");

  const handleClick = () => {
    const taskObj = {
      id: Math.random(),
      title: text,
      status: false,
    };
    handleAdd(taskObj);
  };

  return (
    <div
      style={{
        // width: "80%",
        borderRadius: "10px",
        border: "2px dotted",
        padding: "15px",
        margin: "auto",
        backgroundColor: "lightseagreen",
      }}
    >
      <h2
        style={{
          backgroundColor: "lightcyan",
          color: "black",
          padding: "8px",
        }}
      >
        Todo with useReducer
      </h2>
      <input
        type="text"
        style={{
          width: "50%",
          padding: "8px",
          borderTopLeftRadius: "10px",
          borderEndStartRadius: "10px",
          paddingLeft: "20px",
          fontSize: "18px",
          paddingTop: "10px",
          paddingBottom: "12px",
        }}
        placeholder="Enter Your Todo"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        style={{
          width: "15%",
          paddingTop: "12px",
          paddingBottom: "12px",
          fontSize: "16px",
          backgroundColor: "blue",
          color: "white",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
        onClick={handleClick}
      >
        Add Todo
      </button>
    </div>
  );
};
export default AddTodo;
