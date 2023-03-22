import { useState } from "react";

function Form1() {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState(18);
  const [country, setCountry] = useState("");

  const UpdateDetail = () => {
    const obj = {
      userName,
      age,
      country,
    };
    console.log(obj);
  };

  return (
    <div
      style={{
        width: "40%",
        margin: "auto",
        border: "dashed lightblue",
        padding: "15px",
        backgroundColor: "black",
        color: "white",
        borderRadius: "10px",
      }}
    >
      <h2>Form with useState</h2>
      <label htmlFor="" style={{ fontSize: "larger" }}>
        Username :
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
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
          onClick={() => setAge(age + 1)}
          style={{
            marginRight: "15px",
            paddingLeft: "15px",
            paddingRight: "15px",
            paddingBottom: "4px",
            paddingTop: "4px",
            fontSize: "14px",
            borderRadius: "6px",
          }}
        >
          +
        </button>
        <span>Age : {age}</span>
        <button
          onClick={() => setAge(age - 1)}
          style={{
            marginLeft: "15px",
            paddingLeft: "15px",
            paddingRight: "15px",
            paddingBottom: "4px",
            paddingTop: "4px",
            fontSize: "14px",
            borderRadius: "6px",
          }}
        >
          -
        </button>
        <br />
        <br />
        <select
          style={{
            padding: "4px",
            borderRadius: "6px",
          }}
          onChange={(e) => setCountry(e.target.value)}
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
          }}
          onClick={UpdateDetail}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
export default Form1;
