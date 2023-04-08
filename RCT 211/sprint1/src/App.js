import './App.css';
// import Form from './Compo/Form';
import { Heading } from '@chakra-ui/react'
import Timer from './Compo/Timer';
import Scroll from './Compo/Scroll';
import Form from './Compo/Form';
import Timer1 from './Compo/Timer1';
import OTPboxes from './Compo/OtpBoxes';
import OtpBoxes2 from './Compo/Boxes/OtpBoxes2';

function App() {
  return (
    <div className="App">
      <Heading as={"h1"} colorScheme='blue'>Unit - 5</Heading>
      <Form />
      <Timer />
      <Timer1 />
      <Scroll />
      <hr />
      <OTPboxes />
      <hr />
      <OtpBoxes2 />
    </div>
  );
}

export default App;
