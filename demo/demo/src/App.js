import './App.css';
import MyComponet from './Components/MyButton';

function App() {
  return (
    <div className="App">
      <MyComponet heading={"Heading 1 from My Componet "} buttonText={"Button 1"} />
      <MyComponet heading={"Heading 2 from same Component"} buttonText={"Button 2"} />
    </div>
  );
}

export default App;
