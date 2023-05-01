import './App.css';
import Button from './Components/Button';

function App() {

  const handleButton = () => {
    alert("Welcome Nawab!")
  }

  return (
    <div className="App">
      <Button children={"Add"} size={"medium"} color={"red"} func={handleButton} />
      <Button children={"Reduce"} size={"medium"} color={"red"} func={handleButton} />
      <Button children={"Reset"} size={"medium"} color={"red"} func={handleButton} />
    </div>
  );
}

export default App;
