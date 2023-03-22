import "./App.css";
import CouterWithUsrReducer from "./Components/Counter/couterWithUseReducer";
import CouterWithUseState from "./Components/Counter/CouterWithUseState";
import Form1 from "./Components/Form/Form1";
import Form2 from "./Components/Form/Form2";
import Todo from "./Components/Todo/Todo";
import AxiosReasturant from "./Components/Axios/NetReqWithAxios";

function App() {
  return (
    <div className="App">
      <h1
        style={{
          backgroundColor: "red",
          color: "white",
        }}
      >
        Sprint-4
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          justifyContent: "space-evenly",
          // border: "solid black",
        }}
      >
        <CouterWithUseState />
        <CouterWithUsrReducer />
      </div>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          justifyContent: "space-evenly",
          marginBottom: "25px",
          // border: "solid black",
        }}
      >
        <Form1 />
        <Form2 />
      </div>
      <Todo />
      <div>
        <AxiosReasturant />
      </div>
    </div>
  );
}

export default App;
