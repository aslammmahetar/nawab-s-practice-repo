import "./App.css";
import { Center, Heading, Container } from "@chakra-ui/react";
import BreakPoints from "./BreakPoints";
import Grid from "./Grid";

function App() {
  return (
    <>
      <Heading
        bg="red"
        display="flex"
        justifyContent="center"
        p={8}
        color="white"
      >
        Sprint 4 Chaka-UI
      </Heading>
      <Center bg={"blue"} p={10} color="white">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
        obcaecati est doloremque facilis excepturi molestiae voluptates unde
        odio minus? Quasi voluptatum quaerat dignissimos libero recusandae
        corporis dolorum eos, similique nam!
      </Center>
      <Container maxW="md" bg="red" color="white">
        "md" Container
      </Container>
      <BreakPoints />
      <Grid />
    </>
  );
}

export default App;
