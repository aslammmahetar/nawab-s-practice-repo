import "./App.css";
import CouterWithUsrReducer from "./Components/Counter/couterWithUseReducer";
import CouterWithUseState from "./Components/Counter/CouterWithUseState";
import Form1 from "./Components/Form";

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
      {/* <Form1 /> */}
    </div>
  );
}

export default App;
