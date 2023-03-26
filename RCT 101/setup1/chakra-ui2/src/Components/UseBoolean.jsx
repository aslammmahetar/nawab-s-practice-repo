import {
  Center,
  Box,
  useBoolean,
  Text,
  Button,
  Spacer,
} from "@chakra-ui/react";

function UseBoolean() {
  const [flag, setFlag] = useBoolean();

  return (
    <Box bg={"lightskyblue"} p="10">
      <Center>
        <Text>Boolean state: {flag.toString()}</Text>
        <Spacer />
        <Button onClick={setFlag.toggle}>
          Click me to toggle the boolean value
        </Button>
      </Center>
    </Box>
  );
}

export default UseBoolean;
